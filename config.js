module.exports = {
  resume: {
    stripe: {
      enabled: true,
    },
  },
  applicant: {
    name: 'Lucas Smith',
    tagline: 'Motivated self-starter who loves all things Technology!',
    mobile: {
      enabled: true,
      pretty: '+61 423 348 721',
      value: '+61423348721',
    },
    email: {
      enabled: true,
      value: 'me@lucasjamessmith.me',
    },
    linkedin: {
      enabled: true,
      pretty: 'Lucas Smith',
      value: 'https://linkedin.com/in/lucas-james-smith',
    },
    github: {
      enabled: true,
      pretty: 'Mythie',
      value: 'https://github.com/Mythie',
    },
    facebook: {
      enabled: false,
      pretty: '',
      value: '',
    },
    location: {
      enabled: true,
      value: 'Melbourne, VIC',
    },
  },
  skills: {
    enabled: true,
    list: [
      'Python and PowerShell Automation',
      'Cloud Infrastructure (AWS, GCP)',
      'JavaScript (ES6)',
      'Golang',
      'Full Stack Development',
    ],
  },
  currentRole: {
    enabled: true,
    company: 'Telstra',
    title: 'Web Developer',
    duration: 'Nov 2018 - Current',
    paragraph: `
      A contracting role with Telstra where I was tasked with developing and maintaining a web application that interacted with
      a C++ backend. The application was used to support critical functions within the networking space and assisted in capacity 
      planning, fault identification and performance metrics. During my time I adopted other responsibilities including managing
      our Postgres Database, Automation of tasks with Python and data analysis using Python and Excel.
    `,
    achievementList: [
      'Improved page load speeds by a significant factor within our web application.',
      'Added a light testing framework around the legacy backend using Postman and Chai.',
      'Automated several tasks performed by other members of the team increasing productivity.',
      'Created several intermediary API\'s and tools to assist in data gathering and processing.',
    ],
  },
  experience: {
    enabled: true,
    list: [
      {
        company: 'IBM',
        title: 'Devops Engineer',
        duration: '2017 - 2018',
        paragraph: `
          This role started on an AWS Support team where I was quickly moved to a Devops and Automation team due to my previous experience.
          Whilst with IBM I successfully pitched solutions to our client which were then taken up and moved to project work, in addition I 
          heavily worked alongside other engineers in order to improve our current cloud solution.
        `,
        achievementList: [
          'Established DevOps practices within a large Government account.',
          'Automated several enterprise IBM Applications (B2B, MQ).',
          'Managed and Automated Active Directory activites.',
          'Provided data analysis and metrics utilsing available tools.',
          'Designed and Implemented processes and tools for managing machine and architecture state.',
        ],
      },
    ],
  },
  education: {
    enabled: true,
    list: [
      {
        course: 'Bachelor Of Information Technology',
        provider: 'Federation University',
        duration: '2016 - 2019',
        paragraph: `
          A bachelors program offered through Federation Univeristy where I majored in Programming and Software Engineering.
        `,
        achievementList: [
          'Was recognised by the Dean of my faculty (Technology) for my achievements within Programming subjects.',
          'Created a real product for a client provided through the University during my final project.',
        ],
      },
      {
        course: 'New Ways of Working',
        provider: 'IBM',
        duration: '2018',
        paragraph: `
          A 3 day bootcamp that involved creating and validating a problem statement and then creating a solution
           which was pitched to IBM Executives.
        `,
        achievementList: [
          'Won the overall bootcamp competition which lead to our idea being pitched to a real IBM client.',
          'Successfully developed a prototype of an energy utilisation dashboard during the bootcamp.',
          'Worked together and collaborated with a team of varying backgrounds and nationalities effectively within the 3 day period.',
        ],
      },
      {
        course: 'Cloud Application Developer Bootcamp',
        provider: 'IBM',
        duration: '2018',
        paragraph: 'A short bootcamp that involved understanding and utlising IBM cloud products in order to design and produce reliable solutions.',
      },
    ],
  },
  references: {
    enabled: false,
    list: [
      {
        name: 'Lucas Smith',
        position: 'Web Developer',
        company: 'Telstra',
        relation: 'Reported to',
        mobile: '040404040',
        email: 'no@me.me',
      },
      {
        name: 'Lucas Smith',
        position: 'Web Developer',
        company: 'Telstra',
        relation: 'Reported to',
        mobile: '040404040',
        email: 'no@me.me',
      },
    ],
  },
};
