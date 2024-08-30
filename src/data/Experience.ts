export interface ExperienceType {
  title: string;
  subtitle: string;
  website?: string;
  date: string;
  content: {text: string; list: string[]; tech: string[]};
}

export const Experience: ExperienceType[] = [
  {
    title: 'Freelance Software Developer',
    subtitle: 'Central Software Solutions - Jersey',
    website: 'https://www.minute-machine.com/login',
    date: 'January 2024 - Present',
    content: {
      text: '',
      list: [
        'Led the development and enhancement of a comprehensive meeting management platform, delivering a user-friendly interface and robust backend.',
        'Developed and integrated GraphQL endpoints to streamline the management of meeting agendas and items, improving overall efficiency.',
        'Designed and implemented user interfaces for managing agendas and minutes, incorporating advanced features such as autosave and drag-and-drop functionality.',
        'Implemented PDF generation and e-signature capabilities for secure and efficient documentation.',
        'Developed a roles and permissions system to ensure precise access control over meeting-related content.',
        'Optimized the review and release workflow, significantly enhancing deployment pipeline efficiency and reliability.',
      ],
      tech: [
        'React.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'GraphQL',
        'PostgreSQL',
        'Firebase',
        'AWS (S3, CloudFront, Lambda)',
        'PDF generation',
        'E-signature integration',
        'WebSockets',
      ],
    },
  },
  {
    title: 'UI UX / Front-End Developer',
    subtitle: 'CoDev Philippines - Cebu City, Philippines',
    website: 'https://www.codev.com/',
    date: 'August 2023 - Present',
    content: {
      text: '',
      list: [
        'Contributed to the development of new features, pages, and bug fixes for the Citizen Portal using ASP.NET Razor and Bootstrap, improving user experience and functionality.',
        'Developed key modules for Soar Scribe utilizing ASP.NET Razor and Tailwind CSS, enhancing application performance and maintainability.',
        'Created dynamic Stats and Reporting Pages by consuming APIs to pull data from various sources, including databases, Google Analytics, and Stripe.',
      ],
      tech: [
        '.NET C#',
        'Razor',
        'Bootstrap CSS',
        'jQuery',
        'JavaScript',
        'Tailwind CSS',
      ],
    },
  },
  {
    title: 'Head of Product',
    subtitle: 'Aquila Softwares Corp - Davao City, Philippines',
    website: 'https://aquilasoftwares.com/',
    date: 'July 2022 - Present',
    content: {
      text: '',
      list: [
        'Led the development of key functions and modules for the Aquila Clinic System, ensuring seamless healthcare management and data accuracy.',
        'Spearheaded the development of Clinix +, Verify/Compass, and Partsman App, delivering innovative solutions tailored to industry needs.',
        'Played a crucial role in project planning and management meetings, aligning development efforts with business goals.',
        'Oversaw the release process and managed store deployments, ensuring timely and successful product launches across platforms.',
        'Mentored and guided a team of developers, fostering a collaborative and productive development environment.',
      ],
      tech: [
        'React',
        'React Native',
        'Expo',
        'JavaScript',
        'Node.js',
        'TypeScript',
      ],
    },
  },
  {
    title: 'Lead Software Engineer',
    subtitle: 'NOUS Business Solutions, Inc. - California, United States',
    website: 'https://mycaresolutions.net/',
    date: 'April 2020 - Present',
    content: {
      text: 'Played a pivotal role in the design and development of a service management system for a leading care solutions company.',
      list: [
        'Redeveloped the existing Care Solutions app, transitioning from Appery to Flutter and Dart, resulting in improved performance and user satisfaction.',
        "Developed multiple features and systems to optimize care service tracking and communication between care support teams and residents' families.",
        'Led the development of web applications using React JS and TypeScript, creating scalable and maintainable codebases.',
        'Built and maintained APIs using Node JS, ensuring seamless integration with front-end applications and third-party services.',
      ],
      tech: [
        'React.js',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'Flutter',
        'Dart',
        'SQL Server',
        'HTML',
        'CSS',
        'SASS',
      ],
    },
  },
  {
    title: 'Lead Full Stack Software Developer',
    subtitle: 'The Guild Limited - Jersey',
    website: 'https://join.theguildltd.com/',
    date: 'October 2020 - December 2022',
    content: {
      text: '',
      list: [
        'Developed The Guild App using Expo, React Native, and TypeScript, delivering a responsive and user-friendly mobile experience.',
        'Built The Guild Portal using React JS and TypeScript, enhancing user interaction and backend integration.',
        'Developed The Guild Meets using Jitsi, providing a reliable and secure platform for virtual meetings.',
      ],
      tech: [
        'React.js',
        'Expo',
        'React Native',
        'TypeScript',
        'JavaScript',
        'AntD',
        'Jitsi',
        'HTML',
        'CSS',
        'SASS',
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
        'Developed a web portal for bike bookings and subscriptions using Vue JS and Vuetify, offering a seamless user experience.',
        'Built Rewind App using Expo, React Native, and TypeScript, enhancing user engagement through intuitive interfaces.',
        'Created Better App using Expo, React Native, and TypeScript, focusing on performance and cross-platform compatibility.',
        'Led web application development efforts using Vue JS, React JS, and TypeScript, delivering responsive and interactive interfaces.',
      ],
      tech: [
        'React.js',
        'Vue.js',
        'Vuetify',
        'Expo',
        'React Native',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'SASS',
      ],
    },
  },
  {
    title: 'Freelance Software Developer',
    subtitle:
      'I.Ekzeed Software Design and Development Co. - Davao City, Philippines',
    website: 'http://www.iekzeed.com/',
    date: 'March 2020 - June 2021',
    content: {
      text: 'Provided ongoing communication and programming support for various software projects, ensuring client satisfaction and project success.',
      list: [],
      tech: [],
    },
  },
  {
    title: 'Senior Software Developer',
    subtitle:
      'I.Ekzeed Software Design and Development Co. - Davao City, Philippines',
    website: 'http://www.iekzeed.com/',
    date: 'June 2014 - March 2020',
    content: {
      text: 'Led the development, maintenance, and support of application programs for administrative, web, and mobile systems, utilizing the .Net Framework and related tools.',
      list: [
        'Designed and developed multiple systems that significantly improved productivity, efficiency, uptime, and accuracy for global operations.',
        'Led the development of desktop applications using C# and Windows Forms, ensuring reliability and user-friendliness.',
        'Built web applications using C#, ASP.NET MVC4, jQuery, and Bootstrap, delivering scalable and responsive solutions.',
        'Developed mobile applications using C# and Xamarin, providing cross-platform functionality and enhanced user experiences.',
        'Mentored junior programmers in best practices, code quality, and development methodologies, fostering a culture of continuous learning.',
      ],
      tech: [
        'C#',
        'VB.NET',
        '.Net Framework 3.5',
        '.Net Framework 4.0',
        'WinForms',
        'ASP.NET',
        'ASP.NET MVC',
        'Xamarin',
        'DevExpress',
        'SQL',
        'MS SQL Server',
        'HTML',
        'CSS',
        'Bootstrap',
        'jQuery',
        'JavaScript',
      ],
    },
  },
];
