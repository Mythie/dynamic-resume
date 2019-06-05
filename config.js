module.exports = {
  resume: {
    stripe: {
      enabled: true,
    },
  },
  applicant: {
    name: 'John Doe',
    tagline: 'Developer',
    mobile: {
      enabled: true,
      pretty: '+0412 345 678',
      value: '+04123456789',
    },
    email: {
      enabled: true,
      value: 'john@example.com',
    },
    linkedin: {
      enabled: true,
      pretty: 'John Doe',
      value: 'https://linkedin.com/in/john-doe',
    },
    github: {
      enabled: true,
      pretty: 'John Doe',
      value: 'https://github.com/octocat',
    },
    facebook: {
      enabled: false,
      pretty: '',
      value: '',
    },
    location: {
      enabled: true,
      value: 'Localhost, 127.0.0.1',
    },
  },
  skills: {
    enabled: true,
    list: [
      'C#',
      'C++',
      'PHP',
      'Javascript',
      'Perl',
      'Ruby',
      'Python',
    ],
  },
  currentRole: {
    enabled: true,
    company: 'Example Org',
    title: 'Developer',
    duration: 'Jan 2019 - Current',
    paragraph: `
      In this role I made a number of tools and applications that met client needs and increased productivity.
    `,
    achievementList: [
      'Did a friday night deploy with no errors',
      'Made several apps that received clients approval',
    ],
  },
  experience: {
    enabled: true,
    list: [
      {
        company: 'Old Example Org',
        title: 'Lead Developer',
        duration: '2017 - 2018',
        paragraph: `
          In this role I was the lead developer managing a small team in order to deliver critical business applications.
        `,
        achievementList: [
          'Improved delivery by upskilling team members',
          'Reduced errors by a factor of 3',
          'Lower expenditure on labour by 20% by properly estimating timelines',
        ],
      },
      {
        company: 'Older Example Org',
        title: 'Developer',
        duration: '2016 - 2017',
        paragraph: `
          In this role I worked closely with the senior developer to deliver products in the health industry.
        `,
      },
    ],
  },
  education: {
    enabled: true,
    list: [
      {
        course: 'Developer Bootcamp',
        provider: 'Bootcamps R Us',
        duration: '2016',
        paragraph: `
          A bootcamp by a respetable provider that provided an intense 8 week training course on all things software development.
          I gained skills in C# and Ruby which were then applied to make a number of applications which deepened my understanding of the SDLC.
        `,
      },
    ],
  },
  references: {
    enabled: true,
    list: [
      {
        name: 'Karen Doe',
        position: 'Project Manager',
        company: 'Old Example Org',
        mobile: '040404040',
        email: 'karen@example.com',
      },
      {
        name: 'Steven Doe',
        position: 'Senior Developer',
        company: 'Older Example Org',
        mobile: '040404040',
      },
    ],
  },
};
