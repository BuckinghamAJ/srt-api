/** @module SolicitationRoutes */

const logger = require('../config/winston')
// noinspection JSUnresolvedVariable
const Notice = require('../models').notice
const predictionRoute = require('../routes/prediction.routes')
const userRoutes = require('../routes/user.routes')
const authRoutes = require('../routes/auth.routes')



/**
 * API routes related to solicitations
 */

module.exports = function (db) {
  return {

    // app.get('/solicitation/:id', (req, res) => {
    //     Prediction.findById(req.params.id).then((solicitation) => {
    //         res.send(solicitation);
    //     }, (e) => {
    //         res.status(400).send(e);
    //     });
    // });

    /**
         * <b> GET /api/solicitation/:id </b> <br><br>
         *
         * Sends a object of type module:prediction.Prediction to the response.
         *
         * @param {Request} req
         * @param {Object} req.params
         * @param {string} req.params.id
         * @param res
         * @return Promise
         */
    get: function (req, res) {
      return Notice.findByPk(req.params.id)
        .then((notice) => {
          if ( ! notice ) {  // no notice found with that ID
            return res.status(404).send({})
          }
          return predictionRoute.getPredictions({ solNum: notice.solicitation_number })
            .then(result => {
              // we should only have one 'prediction' since they will all merge by solicitation number
              // but for consistency we should set the ID number to the one requested rather than to
              // a pseudo-random choice
              result.predictions[0].id = parseInt(req.params.id)
              return res.status(200).send(result.predictions[0])
            })
        })
        .catch((e) => {
          e //?
          logger.log('error', 'error in: solicitation get', { error:e, tag: 'solicitation get' })
          return res.status(500).send('Error finding solicitation')
        })
    },


    /**
     * Updates some pieces of a solicitaiton.
     * Only changes the most recent entry in the Notice table.
     * Columns affected:
     *   na_flag
     *
     * @param {Request} req
     * @param {solicitation} req.body.solicitation
     * @param {Response} res
     * @return {Promise<T>|*}
     */

    update: function(req, res) {
      // Be a GSA Admin or update sol from your org.

      let userInfo = authRoutes.userInfoFromReq(req)
      if (userInfo == null) {
        return res.status(401).send({ msg: 'Not authorized' })
      }

      return Notice.findAll({
        where: {solicitation_number: req.body.solicitation.solNum},
        order: [['date', 'desc']]
      })
        .then( (notices) => {
          // we are only going to work with the first entry - which is the newest row having the given notice_number
          let notice = (notices.length > 0) ? notices[0] : null
          if (notice == null) {
            logger.log('error', req.body, { tag: 'postSolicitation - solicitation not found' })
            return res.status(404).send({ msg: 'solicitation not found' })
          }

          // check that we are allowed to update this one
          if (userInfo.userRole !== 'Administrator' && userInfo.agency !== notice.agency ) {
            return res.status(401).send({ msg: 'Not authorized' })
          }

          if (notice.na_flag != req.body.solicitation.na_flag) {
            if ( ! Array.isArray(notice.action)) {
              notice.action = []
            }
            let new_action = JSON.parse(JSON.stringify(notice.action))
            let user_info = userRoutes.whoAmI(req)
            new_action.push({
              action: (req.body.solicitation.na_flag) ? "Solicitation marked not applicable" : "Not applicable status removed" ,
              status: "complete",
              date: new Date(),
              user: user_info.email
            })
            notice.action = new_action
          }

          notice.na_flag = req.body.solicitation.na_flag



          return notice.save()
            .then( (n) => {
              logger.log("info",
                `Updated Notice row for solicitation ${notice.solicitation_number}`,
                {
                      tag: 'solicitation update',
                      test_flag: req.body.solicitation.na_flag,
                      na_flag: (n.na_flag) ? "true" : "false"
                })
              return res.status(200).send(predictionRoute.makeOnePrediction(n))
            })
            .catch (error => {
              console.log(error)
            })

        })
    },

    /**
         * <b> POST /api/solicitation </b><br><br>
         *
         * Updates the history list of selected solicitation
         *
         * @param {Request} req
         * @param {Object} req.body
         * @param {string} req.body.solNum solicitation number (also known as notice number) of the record to update.
         * @param {Array(History)} req.body.history
         * @param {Array(Feedback)} req.body.feedback
         * @param res
         * @return {Promise}
         */
    postSolicitation: function (req, res) {
      let status = req.body.history.filter(function (e) {
        return e['status'] !== ''
      })

      return Notice.findAll({
        where: { solicitation_number: req.body.solNum.toString() },
        order: [['date', 'desc']]
      })
        .then((notices) => {
          // we are only going to work with the first entry - which is the newest row having the given notice_number
          /** @var Notice notice */
          let notice = (notices.length > 0) ? notices[0] : null
          if (notice == null) {
            logger.log('error', req.body, { tag: 'postSolicitation - solicitation not found' })
            return res.status(404).send({ msg: 'solicitation not found' })
          }

          notice.history = req.body.history
          notice.feedback = req.body.feedback
          notice.action = req.body.action
          if (! Array.isArray(notice.action)){
            notice.action = []
          }
          let user_info = userRoutes.whoAmI(req)
          let now = new Date()
          notice.action.push({
            action: "Record updated",
            status: "complete",
            date: now,
            user: user_info.email
          })

          // noinspection JSUnresolvedFunction
          return notice.save()
            .then((doc) => {
              // logger.log("error", predictionRoute.makeOnePrediction(doc) , {tag:"notice"})
              return res.status(200).send(predictionRoute.makeOnePrediction(doc))
            })
            .catch((e) => {
              logger.log('error', 'error in: postSolicitation - error on save', { error:e, tag: 'postSolicitation - error on save' })
              res.status(400).send({ msg: 'error updating solicitation' })
            })
        })
        .catch((e) => {
          logger.log('error', 'error in: postSolicitation - error during find', { error:e, tag: 'postSolicitation - error during find' })
          res.status(400).send({ msg: 'error updating solicitation' })
        })
    }, // end postSolicitation

    /**
         * <b>POST /api/solicitation/feedback<b><br><br>
         *
         * Send a Array of Prediction Objects matching the parameters.
         * If a solicitation number is provide, send just that one element in the array
         *
         *
         * @param {Object} req
         * @param {Object} req.body
         * @param {string} req.body.solNum If provided, only respond with data for the given solicitation number
         * @param {string} req.body.$where MongoDB style selector. We only support feedback length
         * @param {Object} res
         * @return {Promise}
         *
         */
    solicitationFeedback: (req, res) => {
      // translate mongo formatted parameters to postgres
      let where = [' 1 = 1 ']
      let limit = ''
      let order = ''
      if (req.body.solNum) {
        where.push(` solicitation_number = '${req.body.solNum}' `)
        limit = ' limit 1 ' // notice number should be unique, but isn't in the test data. Yikes!
        order = ' order by date desc ' // take the one with the most recent date
      }
      if (req.body['$where'] && req.body['$where'].match(/this.feedback.length.?>.?0/i)) {
        where.push(` jsonb_array_length(feedback) > 0 `)
      }

      let whereStr = where.join(' AND ')
      let sql = `select * from notice where ${whereStr} ${order} ${limit}`

      return db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT })
        .then((notice) => {
          res.status(200).send(notice.map(predictionRoute.makeOnePrediction))
        })
        .catch(e => {
          logger.log('error', 'error in: solicitationFeedback', { error:e, tag: 'solicitationFeedback' })
          res.status(400).send(e)
        })
    }

  }
}
