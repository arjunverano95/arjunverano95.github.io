export interface ExperienceType {
  title: string;
  subtitle: string;
  website?: string;
  date: string;
  content: {text: string; list: string[]};
}

export const Experience: ExperienceType[] = [
  {
    title: 'Software Developer',
    subtitle: 'NOUS Business Solutions, Inc. - California, United States',
    website: 'https://mycaresolutions.net/',
    date: 'April 2020 - Current',
    content: {
      text: 'Assisted in the design and development of service management system for a leading care solutions company',
      list: [
        'Redevelop the existing Care Solutions app, previously build on Appery, using Flutter and Dart',
        "Developed several features and systems for optimized care service tracking, and communication between care supports and the resident's family members",
        'Web application development using React JS and Typescript',
        'API development using Node JS',
      ],
    },
  },
  {
    title: 'Software Developer',
    subtitle: 'The Guild Limited - Jersey',
    website: 'https://join.theguildltd.com/',
    date: 'October 2020 - December 2022',
    content: {
      text: '',
      list: [
        'Developed The Guild App using Expo, React Native, and Typescript',
        'Developed The Guild Portal using React JS, and Typescript',
        'Developed The Guild Meets using Jitsi',
      ],
    },
  },
  {
    title: 'Freelance Software Developer',
    subtitle: 'Oi You - Jersey',
    website: 'https://oi-you.com/',
    date: 'July 2021 - May 2022',
    content: {
      text: '',
      list: [
        'Developed web portal for bike bookings and subscription using Vue JS, and Vuetify',
        'Developed Rewind App using Expo, React Native, and Typescript',
        'Developed Better App using Expo, React Native, and Typescript',
        'Web application development using Vue JS, React JS, and Typescript',
      ],
    },
  },
  {
    title: 'Freelance Software Developer',
    subtitle: 'I.Ekzeed Software Design and Development Co. - Davao City',
    website: 'http://www.iekzeed.com/',
    date: 'March 2020 - June 2021',
    content: {
      text: 'Maintain communication and programming support.',
      list: [],
    },
  },
  {
    title: 'Senior Software Developer',
    subtitle: 'I.Ekzeed Software Design and Development Co. - Davao City',
    website: 'http://www.iekzeed.com/',
    date: 'June 2014 - March 2020',
    content: {
      text: 'Develop, maintain and support application programs for administrative, Web and mobile systems using .Net Framework and related tools. Analyze code for system testing and debugging; create test transactions to find, isolate and rectify issues; and manage a team of three programmers.',
      list: [
        'Created multiple systems for various business structures that fueled improvements to productivity, efficiency, uptime and accuracy for global operations. Developed code, system design and test/QA plans for all solutions and often coordinated the local or national rollout',
        'Desktop application development using C# and Windows Forms.',
        'Web application development using C#, ASP.NET MVC4, jQuery, and Bootstrap for an accounting system.',
        'Mobile application development using C#, and Xamarin',
        'Trained and mentored junior programmers in programming methodologies and best practices.',
      ],
    },
  },
];
