module.exports = {
  config_keys: {
    VISIBLE_NOTICE_TYPES: "VisibleNoticeTypes"
  },
  common: {
    "jwtSecret" : process.env.JWT_SECRET || ( ( process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development" ) ? "abc123" : null),
    "sessionLength" : "12h",  // 12 hours
    "tokenLife" : "30m",  // 30 minutes
    "renewTokenLife" : "30m", // 30 minutes
    "casDevModeData" :     {
      "last-name": "Test User",
      "agency-code": "023",
      "org-agency-code": "023",
      "maxsecuritylevel": "standard",
      "finalizedinterrupt": "true",
      "eauthloa": "http://idmanagement.gov/icam/2009/12/saml_2.0_profile/assurancelevel2",
      "agency-name": "General Services Administration",
      "grouplist": "AGY-GSA,EXECUTIVE_BRANCH,AGY-GSA-SRT-ADMINISTRATORS.ROLEMANAGEMENT,MAX-AUTHENTICATION-CUSTOMERS-CAS,MAX-AUTHENTICATION-CUSTOMERS-CAS-GSA-SRT,MAXINFO",
      "phone": "(609) 231-7251",
      "longtermauthenticationrequesttokenused": "false",
      "user-classification": "CONTRACTOR",
      "first-name": "MAX CAS",
      "isfromnewlogin": "true",
      "org-tag": "(GSA,Ctr)",
      "authenticationdate": "2019-05-02T15:17:53.418-04:00[America/New_York]",
      "max-id": "A1234567",
      "org-agency-name": "General Services Administration",
      "itweb-role": "no_itweb_role",
      "bureau-name": "General Services Administration",
      "successfulauthenticationhandlers": "UsernamePassword",
      "org-bureau-code": "00",
      "user-status": "A",
      "maxauthenticationgroups": "",
      "usercerts": "Piv-Client-Cert",
      "middle-name": "T",
      "credentialtype": "UsernamePasswordCredential",
      "samlauthenticationstatementauthmethod": "urn:max:fips-201-pivcard",
      "org-bureau-name": "General Services Administration",
      "bureau-code": "00",
      "authenticationmethod": "urn:max:fips-201-pivcard",
      "email-address": "albert.crowley@gsa.gov"
    },
    "casDevModeData-Navy" :     {
      "last-name": "Test User",
      "agency-code": "023",
      "org-agency-code": "023",
      "maxsecuritylevel": "standard",
      "finalizedinterrupt": "true",
      "eauthloa": "http://idmanagement.gov/icam/2009/12/saml_2.0_profile/assurancelevel2",
      "agency-name": "Department of the Navy",
      "grouplist": "AGY-GSA-SRT-508-COORDINATOR",
      "phone": "(609) 231-7251",
      "longtermauthenticationrequesttokenused": "false",
      "user-classification": "CONTRACTOR",
      "first-name": "MAX CAS",
      "isfromnewlogin": "true",
      "org-tag": "(GSA,Ctr)",
      "authenticationdate": "2019-05-02T15:17:53.418-04:00[America/New_York]",
      "max-id": "A1234567",
      "org-agency-name": "General Services Administration",
      "itweb-role": "no_itweb_role",
      "bureau-name": "General Services Administration",
      "successfulauthenticationhandlers": "UsernamePassword",
      "org-bureau-code": "00",
      "user-status": "A",
      "maxauthenticationgroups": "",
      "usercerts": "Piv-Client-Cert",
      "middle-name": "T",
      "credentialtype": "UsernamePasswordCredential",
      "samlauthenticationstatementauthmethod": "urn:max:fips-201-pivcard",
      "org-bureau-name": "Department of the Navy",
      "bureau-code": "00",
      "authenticationmethod": "urn:max:fips-201-pivcard",
      "email-address": "albert.crowley@gsa.gov"
    },

    "PIVLoginCheckRegex": "pivcard",
    "CORSWhitelist": [
      "http://localhost:4200",
      "https://srt.app.cloud.gov",
      "https://srt-client.app.cloud.gov",
      "https://srt-client-dev.app.cloud.gov",
      "https://srt-client-staging.app.cloud.gov",
      "https://srt-client-prod.app.cloud.gov",
    ],
    "constants": {
      "EMAIL_ACTION": "Sent email to POC",
      "FEEDBACK_ACTION": "Prediction feedback provided",
      "CREATED_ACTION": "Solicitation Posted",
      "NA_ACTION": "Solicitation marked not applicable",
      "UNDO_NA_ACTION": "Not applicable status removed"
    },
    AGENCY_HIERARCHY: {
      'Department of Defense': {
        offices: ['DEPARTMENT OF THE ARMY', 'DEPARTMENT OF THE NAVY', 'DEPARTMENT OF THE AIR FORCE', 'SPACE FORCE', 'DEFENSE LOGISTICS AGENCY'],
        variations: {
          'DEPARTMENT OF THE ARMY': {
            aliases: ['DEPT OF THE ARMY', 'US ARMY', 'ARMY'],
            email_domains: ['army.mil']
          },
          'DEPARTMENT OF THE NAVY': {
            aliases: ['DEPT OF THE NAVY', 'US NAVY', 'NAVY'],
            email_domains: ['navy.mil', 'us.navy.mil']
          },
          'DEPARTMENT OF THE AIR FORCE': {
            aliases: ['DEPT OF THE AIR FORCE', 'US AIR FORCE', 'AIR FORCE'],
            email_domains: ['af.mil', 'us.af.mil']
          },
          'SPACE FORCE': {
            aliases: ['US SPACE FORCE', 'USSF'],
            email_domains: ['spaceforce.mil']
          },
          'DEFENSE LOGISTICS AGENCY': {
            aliases: ['DLA'],
            email_domains: ['dla.mil']
          }
        }
      },
      'Department of Health and Human Services': {
        offices: ['NATIONAL INSTITUTES OF HEALTH', 'FOOD AND DRUG ADMINISTRATION', 'INDIAN HEALTH SERVICE', 'CENTERS FOR MEDICARE & MEDICAID SERVICES'],
        variations: {
          'NATIONAL INSTITUTES OF HEALTH': {
            aliases: ['NIH'],
            email_domains: ['nih.gov']
          },
          'FOOD AND DRUG ADMINISTRATION': {
            aliases: ['FDA'],
            email_domains: ['fda.hhs.gov']
          },
          'INDIAN HEALTH SERVICE': {
            aliases: ['IHS'],
            email_domains: ['ihs.gov']
          },
          'CENTERS FOR MEDICARE & MEDICAID SERVICES': {
            aliases: ['CMS'],
            email_domains: ['cms.hhs.gov']
          }
        }
      },
      'Department of Homeland Security': {
        offices: ['FEDERAL EMERGENCY MANAGEMENT AGENCY', 'US CITIZENSHIP AND IMMIGRATION SERVICES', 'US SECRET SERVICE'],
        variations: {
          'FEDERAL EMERGENCY MANAGEMENT AGENCY': {
            aliases: ['FEMA'],
            email_domains: ['fema.dhs.gov']
          },
          'US CITIZENSHIP AND IMMIGRATION SERVICES': {
            aliases: ['USCIS'],
            email_domains: ['uscis.dhs.gov']
          },
          'US SECRET SERVICE': {
            aliases: ['USSS', 'SECRET SERVICE'],
            email_domains: ['usss.dhs.gov']
          }
        }
      },
      'Department of Commerce': {
        offices: ['NATIONAL OCEANIC AND ATMOSPHERIC ADMINISTRATION', 'NATIONAL TELECOMMUNICATIONS AND INFORMATION ADMINISTRATION'],
        variations: {
          'NATIONAL OCEANIC AND ATMOSPHERIC ADMINISTRATION': {
            aliases: ['NOAA'],
            email_domains: ['noaa.gov']
          },
          'NATIONAL TELECOMMUNICATIONS AND INFORMATION ADMINISTRATION': {
            aliases: ['NTIA'],
            email_domains: ['ntia']
          }
        }
      },
      'Department of the Interior': {
        offices: ['NATIONAL PARK SERVICE', 'FISH AND WILDLIFE SERVICE', 'BUREAU OF OCEAN ENERGY MANAGEMENT'],
        variations: {
          'NATIONAL PARK SERVICE': {
            aliases: ['NPS'],
            email_domains: ['nps.gov']
          },
          'FISH AND WILDLIFE SERVICE': {
            aliases: ['FWS', 'FISH AND WILDLIFE'],
            email_domains: ['fws.gov']
          },
          'BUREAU OF OCEAN ENERGY MANAGEMENT': {
            aliases: ['BOEM'],
            email_domains: ['boem.gov']
          }
        }
      },
      'Department of the Treasury': {
        offices: ['INTERNAL REVENUE SERVICE', 'US MINT'],
        variations: {
          'INTERNAL REVENUE SERVICE': {
            aliases: ['IRS'],
            email_domains: ['irs.gov']
          },
          'US MINT': {
            aliases: ['MINT'],
            email_domains: ['usmint.treas.gov']
          }
        }
      }
    },
    UNIQUE_EMAIL_AGENCY_MAPPING: {
      'usss.dhs.gov': 'US SECRET SERVICE',
      'fema.dhs.gov': 'FEDERAL EMERGENCY MANAGEMENT AGENCY',
      'uscis.dhs.gov': 'US CITIZENSHIP AND IMMIGRATION SERVICES',
      'cms.hhs.gov': 'CENTERS FOR MEDICARE & MEDICAID SERVICES',
      'fda.hhs.gov': 'FOOD AND DRUG ADMINISTRATION',
      'us.af.mil': 'DEPT OF THE AIR FORCE',
      'us.navy.mil': 'DEPT OF THE NAVY'
    },
    // keys for agency look should be all lower case
    AGENCY_LOOKUP: {
      "department of test": "TEST, DEPARTMENT OF",
      "department of agriculture": "Department of Agriculture",
      "department of commerce": "Department of Commerce",
      "department of education": "Department of Education",
      "department of health and human services": "Department of Health and Human Services",
      "department of homeland security": "Department of Homeland Security",
      "department of housing and urban development": "Department of Housing and Urban Development",
      "department of justice": "Department of Justice",
      "department of labor": "Department of Labor",
      "department of state": "Department of State",
      "department of the interior": "Department of the Interior",
      "department of the treasury": "Department of the Treasury",
      "department of transportation": "Department of Transportation",
      "environmental protection agency": "Environmental Protection Agency",
      "executive office of the president": "Executive Office of the President",
      "international assistance programs": "International Assistance Programs",
      "national aeronautics and space administration": "National Aeronautics and Space Administration",
      "national science foundation": "National Science Foundation",
      "nuclear regulatory commission": "Nuclear Regulatory Commission",
      "office of personnel management": "Office of Personnel Management",
      "small business administration": "Small Business Administration",
      "social security administration": "Social Security Administration",
      "general services administration": "General Services Administration",
      "department of defense--military programs": "Department of Defense",
      "department of defense": "Department of Defense",
      "millennium challenge corporation":"Millennium Challenge Corporation",
      "acf": "Administration for Children and Families",
      "ahrq": "Agency for Healthcare Research and Quality",
      "ams": "Agricultural Marketing Service",
      "amtrak": "Amtrak",
      "aphis": "Animal and Plant Health Inspection Service",
      "atf": "Bureau of Alcohol, Tobacco, Firearms and Explosives",
      "bea": "Bureau of Economic Analysis",
      "bep": "Bureau of Engraving and Printing",
      "bis": "Bureau of Industry and Security",
      "blm": "Bureau of Land Management",
      "bop": "Federal Bureau of Prisons",
      "cbo": "Congressional Budget Office",
      "cdc": "Centers for Disease Control and Prevention",
      "centcom": "U.S. Central Command",
      "cftc": "U.S. Commodity Futures Trading Commission",
      "cia": "Central Intelligence Agency",
      "cms": "Medicaid",
      "cncs": "Corporation for National and Community Service",
      "cnpp": "Center for Nutrition Policy and Promotion",
      "cops": "Community Oriented Policing Services",
      "cpsc": "Consumer Product Safety Commission",
      "darpa": "Defense Advanced Research Projects Agency",
      "dea": "Drug Enforcement Administration",
      "dfas": "Defense Finance and Accounting Service",
      "dhs": "Homeland Security Department",
      "dia": "Defense Intelligence Agency",
      "disa": "Defense Information Systems Agency",
      "dla": "Defense Logistics Agency",
      "doc": "Commerce Department",
      "dod": "Defense Department",
      "doe": "Energy Department",
      "doi": "Department of the Interior",
      "doj": "Justice Department",
      "dol": "U.S. Department of Labor",
      "dos": "Department of State",
      "dot": "Transportation Department",
      "dsca": "Defense Security Cooperation Agency",
      "dtic": "Defense Technical Information Center",
      "dtra": "Defense Threat Reduction Agency",
      "eac": "Election Assistance Commission",
      "ebsa": "Employee Benefits Security Administration",
      "ed": "U.S. Department of Education",
      "eda": "Economic Development Administration",
      "eeoc": "Equal Employment Opportunity Commission",
      "epa": "Environmental Protection Agency",
      "eric": "Information Resources Center",
      "faa": "Federal Aviation Administration",
      "fbi": "Federal Bureau of Investigation",
      "fcc": "Federal Communications Commission",
      "fda": "Food and Drug Administration",
      "fdic": "Federal Deposit Insurance Corporation",
      "fema": "Federal Emergency Management Agency",
      "fha": "Federal Housing Administration",
      "fheo": "Fair Housing and Equal Opportunity",
      "fletc": "Federal Law Enforcement Training Center",
      "flra": "Federal Labor Relations Authority",
      "fmcsa": "Federal Motor Carrier Safety Administration",
      "fra": "Federal Railroad Administration",
      "fta": "Federal Transit Administration",
      "ftc": "Federal Trade Commission",
      "fws": "Fish and Wildlife Service",
      "fanniemae": "Federal National Mortgage Association",
      "freddiemac": "Federal Home Loan Mortgage Corporation",
      "gao": "Government Accountability Office",
      "gpo": "Government Publishing Office",
      "gsa": "General Services Administration",
      "ginniemae": "Government National Mortgage Association",
      "hhs": "U.S. Department of Health and Human Services",
      "hud": "Department of Housing and Urban Development",
      "csce": "Commission on Security and Cooperation in Europe",
      "ice": "U.S. Immigration and Customs Enforcement",
      "irs": "Internal Revenue Service",
      "ita": "International Trade Administration",
      "loc": "Library of Congress",
      "marad": "Maritime Administration",
      "mda": "Missile Defense Agency",
      "msha": "Mine Safety and Health Administration",
      "nara": "Archives, National Archives and Records Administration",
      "nasa": "National Aeronautics and Space Administration",
      "nci": "National Cancer Institute",
      "ncua": "National Credit Union Administration",
      "nea": "National Endowment for the Arts",
      "nfip": "National Flood Insurance Program",
      "nhic": "National Health Information Center",
      "nhlbi": "National Heart, Lung, and Blood Institute",
      "nhtsa": "National Highway Traffic Safety Administration",
      "nih": "National Institutes of Health",
      "nimh": "National Institute of Mental Health",
      "niosh": "National Institute of Occupational Safety and Health",
      "nist": "National Institute of Standards and Technology",
      "nlrb": "National Labor Relations Board",
      "noaa": "National Oceanic and Atmospheric Administration",
      "npic": "National Passport Information Center",
      "nps": "National Park Service",
      "nrc": "Nuclear Regulatory Commission",
      "nsa": "National Security Agency",
      "nsc": "National Security Council",
      "nsf": "National Science Foundation",
      "ntsb": "National Transportation Safety Board",
      "occ": "Office of Comptroller of the Currency",
      "ocse": "Office of Child Support Enforcement",
      "odep": "Office of Disability Employment Policy",
      "oge": "Office of Government Ethics",
      "omb": "Office of Management and Budget",
      "ondcp": "Office of National Drug Control Policy",
      "opm": "Office of Personnel Management",
      "osers": "Office of Special Education and Rehabilitative Services",
      "osha": "Occupational Safety and Health Administration",
      "pbgc": "Pension Benefit Guaranty Corporation",
      "pclob": "Privacy and Civil Liberties Oversight Board",
      "rfa": "Radio Free Asia",
      "rferl": "Radio Free Europe and Radio Liberty",
      "rrb": "Railroad Retirement Board",
      "samhsa": "Substance Abuse and Mental Health Services Administration",
      "sba": "Small Business Administration",
      "sec": "Securities and Exchange Commission",
      "ssa": "Social Security Administration",
      "sss": "Selective Service System",
      "tsa": "Transportation Security Administration",
      "tva": "Tennessee Valley Authority",
      "uscert": "Computer Emergency Readiness Team",
      "usaid": "U.S. Agency for International Development",
      "uscis": "Citizenship and Immigration Services",
      "usda": "Department of Agriculture",
      "usgs": "Geological Survey",
      "usps": "Postal Service",
      "va": "Department of Veterans Affairs",
      "vba": "Veterans Benefits Administration",
      "vets": "Veterans' Employment and Training Service",
      "vha": "Veterans Health Administration",
      "voa": "Voice of America",
      "washington, dc": "District of Columbia",
      "army": "DEPT OF THE ARMY",
      "navy": "DEPT OF THE NAVY",
      "af": "DEPT OF THE AIR FORCE",
      "spaceforce": "SPACE FORCE", 
      "dla": "DEFENSE LOGISTICS AGENCY",
      "ihs": "INDIAN HEALTH SERVICE",
      "usss": "US SECRET SERVICE",
      "usmint": "US MINT"
    },

    // AGENCY_LOOKUP: {
    //   "department of agriculture":"Department of Agriculture",
    //   "department of commerce":"Department of Commerce",
    //   "department of defense":"Department of Defense",
    //   "department of education":"Department of Education",
    //   "department of health and human services":"Department of Health and Human Services",
    //   "department of homeland security":"Department of Homeland Security",
    //   "department of housing and urban development":"Department of Housing and Urban Development",
    //   "department of justice":"Department of Justice",
    //   "department of labor":"Department of Labor",
    //   "department of state":"Department of State",
    //   "department of the interior":"Department of the Interior",
    //   "department of the treasury":"Department of the Treasury",
    //   "department of transportation":"Department of Transportation",
    //   "environmental protection agency":"Environmental Protection Agency",
    //   "executive office of the president":"Executive Office of the President",
    //   "general services administration":"General Services Administration",
    //   "agency for international development":"Agency for International Development",
    //   "national aeronautics and space administration":"National Aeronautics and Space Administration",
    //   "national science foundation":"National Science Foundation",
    //   "nuclear regulatory commission":"Nuclear Regulatory Commission",
    //   "office of personnel management":"Office of Personnel Management",
    //   "small business administration":"Small Business Administration",
    //   "social security administration":"Social Security Administration",
    //   "library of congress": "Library of Congress",
    //   "department of veterans affairs": "Department of Veterans Affairs",
    //   "national archives and records administration": "National Archives and Records Administration",
    //   "department of energy":"Department of Energy",
    //   "millennium challenge corporation":"Millennium Challenge Corporation",
    //   "Department of Defense--Military Programs": "DEPT OF DEFENSE"
    //
    // },
    AGENCY_MAP: {
      "AGRICULTURE, DEPARTMENT OF":"Department of Agriculture",
      "COMMERCE, DEPARTMENT OF":"Department of Commerce",
      "DEPT OF DEFENSE":"Department of Defense",
      "DEPARTMENT OF DEFENSE":"Department of Defense",
      "Defense Logistics Agency":"Department of Defense",
      "Other Defense Agencies":"Department of Defense",
      "Defense Information Systems Agency":"Department of Defense",
      "EDUCATION, DEPARTMENT OF":"Department of Education",
      "HEALTH AND HUMAN SERVICES, DEPARTMENT OF":"Department of Health and Human Services",
      "HOMELAND SECURITY, DEPARTMENT OF":"Department of Homeland Security",
      "HOUSING AND URBAN DEVELOPMENT, DEPARTMENT OF":"Department of Housing and Urban Development",
      "JUSTICE, DEPARTMENT OF":"Department of Justice",
      "LABOR, DEPARTMENT OF":"Department of Labor",
      "STATE, DEPARTMENT OF":"Department of State",
      "INTERIOR, DEPARTMENT OF THE":"Department of the Interior",
      "TREASURY, DEPARTMENT OF THE":"Department of the Treasury",
      "TRANSPORTATION, DEPARTMENT OF":"Department of Transportation",
      "ENVIRONMENTAL PROTECTION AGENCY":"Environmental Protection Agency",
      "EXECUTIVE OFFICE OF THE PRESIDENT":"Executive Office of the President",
      "GENERAL SERVICES ADMINISTRATION":"General Services Administration",
      "AGENCY FOR INTERNATIONAL DEVELOPMENT":"Agency for International Development",
      "NATIONAL AERONAUTICS AND SPACE ADMINISTRATION":"National Aeronautics and Space Administration",
      "NATIONAL SCIENCE FOUNDATION":"National Science Foundation",
      "NUCLEAR REGULATORY COMMISSION":"Nuclear Regulatory Commission",
      "OFFICE OF PERSONNEL MANAGEMENT":"Office of Personnel Management",
      "SMALL BUSINESS ADMINISTRATION":"Small Business Administration",
      "SOCIAL SECURITY ADMINISTRATION":"Social Security Administration",
      "LIBRARY OF CONGRESS": "Library of Congress",
      "VETERANS AFFAIRS, DEPARTMENT OF": "Department of Veterans Affairs",
      "NATIONAL ARCHIVES AND RECORDS ADMINISTRATION": "National Archives and Records Administration",
      "ENERGY, DEPARTMENT OF":"Department of Energy",
      "MILLENNIUM CHALLENGE CORPORATION":"Millennium Challenge Corporation"
    },
    VisibleNoticeTypes : ['Solicitation', 'Combined Synopsis/Solicitation', 'RFQ'],
    //"minPredictionCutoffDate" : "2020-02-01T00:00:00.000Z",
    "predictionCutoffDays" : 60,
    "updatePredictionTableMaxRunTime" : 10,
    "updatePredictionTableQueueDelay": 10,
    "logPerformance": false,
    defaultMaxPredictions: 1000
  },
  development: {
    "emailFrom": "crowley+srt@tcg.com",
    "emailServer" : {
      "host": "smtp.sendgrid.net",
      "port": 465,
      "secure": true,
      "auth": {
        "user": "apikey",
        "pass": "ENV variable SENDGRID_API_KEY"
      }
    },
    "emailLogOnly": false,
    "spamProtect" : true,
    "srt_server": {
      "port": 3000
    },
    "srtClientUrl": "http://localhost:4200",
    "logStdOut" : false,
    "logStdOutLevel" : "debug",
    "login_gov_oidc": {
      "client_id": "urn:gov:gsa:openidconnect.profiles:sp:sso:office_of_government_wide_policy:srt_app",
      "issuer_url": "https://idp.int.identitysandbox.gov/.well-known/openid-configuration",
      "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      "token_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/token",
      "user_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/userinfo",
      "redirect_uri": "http://localhost:3000/odic/callback",
      "logout_endpoint": "https://idp.int.identitysandbox.gov/openid_connect/logout",
      
    },
    "maxCas" : {
      "cas_url" : "https://login.test.max.gov/cas/",
      "service_url" : "http://localhost:3000",
      "session_name" : "cas_user",
      "session_info" : "cas_userinfo",
      "is_dev_mode" : true, // adjust to false when you want to test with MAX
      "dev_mode_user" : "dev_user",
      "renew" : true,
      "renew_query_parameter_name" : "bypassMaxsso",
      "password-whitelist": [ "samira.isber@gsa.gov", "albert.crowley@gsa.gov" ]
    },
    "sessionCookieSecure" : false,
    "SolicitationCountLimit" : 1000,
    "logPerformance": false
  },
  "circle": {
    "emailFrom": "crowley+srt@tcg.com",
    "emailServer" : {
      "host": "smtp.sendgrid.net",
      "port": 465,
      "secure": true,
      "auth": {
        "user": "crowley",
        "pass": "ENV variable SENDGRID_API_KEY"
      }
    },
    "emailLogOnly": false,
    "spamProtect" : true,
    "srt_server": {
      "port": 3000
    },
    "srtClientUrl": "https://srt-client-dev.app.cloud.gov",
    "logStdOut" : true,
    "logStdOutLevel" : "error",
    "login_gov_oidc": {
      "client_id": "urn:gov:gsa:openidconnect.profiles:sp:sso:office_of_government_wide_policy:srt_app",
      "issuer_url": "https://idp.int.identitysandbox.gov/.well-known/openid-configuration",
      "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      "token_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/token",
      "user_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/userinfo",
    },
    "maxCas" : {
      "cas_url" : "https://login.test.max.gov/cas/",
      "service_url" : "http://localhost:3000",
      "session_name" : "cas_user",
      "session_info" : "cas_userinfo",
      "is_dev_mode" : true,
      "dev_mode_user" : "dev_user",
      "renew" : true,
      "renew_query_parameter_name" : "bypassMaxsso"
    },
    "logPerformance": false
  },
  "clouddev": {
    "emailFrom": "crowley+srt@tcg.com",
    "emailServer" : {
      "host": "smtp.sendgrid.net",
      "port": 465,
      "secure": true,
      "auth": {
        "user": "apikey",
        "pass": "ENV variable SENDGRID_API_KEY"
      }
    },
    "emailLogOnly": false,
    "spamProtect" : true,
    "srt_server": {
      "port": 8080
    },
    "srtClientUrl": "https://srt-client-dev.app.cloud.gov",
    "logStdOut" : true,
    "logStdOutLevel" : "debug",
    "login_gov_oidc": {
      "client_id": "urn:gov:gsa:openidconnect.profiles:sp:sso:office_of_government_wide_policy:srt_app",
      "issuer_url": "https://idp.int.identitysandbox.gov/.well-known/openid-configuration",
      "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      "token_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/token",
      "user_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/userinfo",
      "redirect_uri": "http://srt-server-dev.app.cloud.gov/odic/callback",
      "logout_endpoint": "https://idp.int.identitysandbox.gov/openid_connect/logout",
    },
    "maxCas" : {
      "cas_url" : "https://login.test.max.gov/cas/",
      "service_url" : "https://srt-server-dev.app.cloud.gov",
      "session_name" : "cas_user",
      "session_info" : "cas_userinfo",
      "is_dev_mode" : false,
      "dev_mode_user" : "",
      "renew" : true,
      "renew_query_parameter_name" : "bypassMaxsso",
      "password-whitelist": [ "samira.isber@gsa.gov", "albert.crowley@gsa.gov" ]
    },
    "logPerformance": false
  },
  "cloudstaging": {
    "emailFrom": "crowley+srtstage@tcg.com",
    "emailServer" : {
      "host": "smtp.sendgrid.net",
      "port": 465,
      "secure": true,
      "auth": {
        "user": "apikey",
        "pass": "ENV variable SENDGRID_API_KEY"
      }
    },
    "emailLogOnly": false,
    "spamProtect" : true,
    "srt_server": {
      "port": 8080
    },
    "srtClientUrl": "https://srt-client-staging.app.cloud.gov",
    "logStdOut" : true,
    "logStdOutLevel" : "debug",
    // TODO: May need to make staging Login.gov App (Using as Placeholder for now)
    "login_gov_oidc": {
      "client_id": "urn:gov:gsa:openidconnect.profiles:sp:sso:office_of_government_wide_policy:srt_app_staging",
      "issuer_url": "https://idp.int.identitysandbox.gov/.well-known/openid-configuration",
      "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      "token_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/token",
      "user_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/userinfo",
      "redirect_uri": "http://srt-server-staging.app.cloud.gov/odic/callback",
      "logout_endpoint": "https://idp.int.identitysandbox.gov/openid_connect/logout",
    },
    "maxCas" : {
      "cas_url" : "https://login.test.max.gov/cas/",
      "service_url" : "https://srt-server-staging.app.cloud.gov",
      "session_name" : "cas_user",
      "session_info" : "cas_userinfo",
      "is_dev_mode" : false,
      "dev_mode_user" : "dev_user",
      "renew" : true,
      "renew_query_parameter_name" : "bypassMaxsso",
      "password-whitelist": [ "samira.isber@gsa.gov", "albert.crowley@gsa.gov" ]
    },
    "logPerformance": false
    // "SolicitationCountLimit" : 10000
  },
  "test": {
    "emailFrom": "crowley+srt@tcg.com",
    "emailServer" : {
      "host": "smtp.sendgrid.net",
      "port": 465,
      "secure": true,
      "auth": {
        "user": "crowley",
        "pass": "ENV variable SENDGRID_API_KEY"
      }
    },
    "spamProtect" : true,
    "srt_server": {
      "port": 8080
    },
    "srtClientUrl": "https://srt-client-dev.app.cloud.gov",
    "logStdOut" : true,
    "logStdOutLevel" : "debug",
    "login_gov_oidc": {
      "client_id": "urn:gov:gsa:openidconnect.profiles:sp:sso:office_of_government_wide_policy:srt_app",
      "issuer_url": "https://idp.int.identitysandbox.gov/.well-known/openid-configuration",
      "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      "token_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/token",
      "user_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/userinfo",
    },
    "maxCas" : {
      "cas_url" : "https://login.test.max.gov/cas/",
      "service_url" : "https://srt-server-test.app.cloud.gov",
      "session_name" : "cas_user",
      "session_info" : "cas_userinfo",
      "is_dev_mode" : false,
      "dev_mode_user" : "",
      "renew" : true,
      "renew_query_parameter_name" : "bypassMaxsso"
    },
    "logPerformance": false
  },
  "production": {
    "emailFrom": "crowley+srt@tcg.com",
    "emailServer" : {
      "host": "smtp.sendgrid.net",
      "port": 465,
      "secure": true,
      "auth": {
        "user": "crowley",
        "pass": "ENV variable SENDGRID_API_KEY"
      }
    },
    "emailLogOnly": false,
    "spamProtect" : true,
    "srt_server": {
      "port": 8080
    },
    "srtClientUrl": "https://srt.app.cloud.gov",
    "logStdOut" : true,
    "logStdOutLevel" : "debug",
    // TODO: Will need to make production Login.gov App (Using as Placeholder for now)
    "login_gov_oidc": {
      "client_id": "urn:gov:gsa:openidconnect.profiles:sp:sso:office_of_government_wide_policy:gsa_srt",
      "issuer_url": "https://secure.login.gov/.well-known/openid-configuration",
      "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      "token_endpoint": "https://secure.login.gov/api/openid_connect/token",
      "user_endpoint": "https://secure.login.gov/api/openid_connect/userinfo",
      "logout_endpoint": "https://secure.login.gov/openid_connect/logout",
      "redirect_uri": "https://srt-server.app.cloud.gov/odic/callback",
    },
    "maxCas" : {
      "cas_url" : "https://login.max.gov/cas/",
      "service_url" : "https://srt-server.app.cloud.gov",
      "cas_version" : "2.0",
      "session_name" : "cas_user",
      "session_info" : "cas_userinfo",
      "is_dev_mode" : false,
      "dev_mode_user" : "",
      "renew" : true,
      "renew_query_parameter_name" : "bypassMaxsso"
    },
    "logPerformance": false
  }
}
