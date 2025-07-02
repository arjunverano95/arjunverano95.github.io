interface ProjectsType {
  title: string;
  description: string;
  image: string;
  GitHub: string;
  hosted: string;
}

export const Projects: ProjectsType[] = [
  {
    title: 'Goddess Story Library',
    description: `A simple and easy to use viewer and library of Goddess story cards. It is built with Expo v47 (bare), React Native, Typescript, RNE v4`,
    image: 'https://i.imgur.com/uGvn4yX.jpg',
    GitHub: 'https://github.com/arjunverano95/goddess-story-library',
    hosted: 'https://arjunverano95.github.io/goddess-story-library/', //'https://drive.google.com/file/d/1jSvF128oKd4pizkIhjIpiZFEoBw7kRCB/view?usp=share_link',
  },
  {
    title: 'Arcana Ebook Reader',
    description: `An Ebook reader powered by Flutter, Material UI, epub_viewer, hive, mobx. Supported file types are epub and pdf`,
    image: 'https://i.imgur.com/Tit12Jv.jpg',
    GitHub: 'https://github.com/arjunverano95/arcana-ebook-reader',
    hosted:
      'https://drive.google.com/file/d/1ZsDKHi-yjOCD6DnS9RDAipLQCNM_K3xt/view?usp=share_link',
  },
  {
    title: 'Pokedex',
    description: `A sample app demonstrating skillful usage of React Native, Expo, Typescript, React Native Elements, Axios, SWR, Mobx and PokeAPI.`,
    image: 'https://i.imgur.com/mdXsxXI.jpeg',
    GitHub: 'https://github.com/arjunverano95/pokedex',
    hosted: '#',
  },
  {
    title: 'Portfolio',
    description: `Portfolio website built with React v18.2, Typescript,  react-router-dom v6, framer-motion, react-icons, emailjs`,
    image: 'https://i.imgur.com/di8Aa9W.jpg',
    GitHub: 'https://github.com/arjunverano95/arjunverano95.github.io',
    hosted: 'https://arjunverano95.github.io/',
  },
  {
    title: 'Chess Game',
    description: `A simple chess game build using C# and .NET Framework 3.5`,
    image: 'https://i.imgur.com/zJdNUem.jpg',
    GitHub: 'https://github.com/arjunverano95/dotnet-chess',
    hosted:
      'https://drive.google.com/file/d/1693LPLc_buN8RY3KPRb1MXwKGKACqQsl/view?usp=share_link',
  },
  {
    title: 'PC BEE ERP',
    description: `A full-featured ERP web app designed for PC BEE Corp. to manage sales, inventory, job orders, services, and reporting. Built using Next.js, Ant Design, and PostgreSQL, tailored for tech retail operations.`,
    image: 'https://i.imgur.com/YmsWrgL.jpg',
    GitHub: '#',
    hosted: 'https://app.pcbee.services/',
  },
  {
    title: 'Espacio de Clarita Hometel',
    description: `A responsive marketing and booking platform for Espacio de Clarita Hometel. Features include room availability, booking management, and front-desk admin tools. Built with Next.js, Ant Design, and PostgreSQL.`,
    image: 'https://i.imgur.com/xTCuep8.jpg',
    GitHub: '#',
    hosted: 'https://www.espaciodeclarita.com/',
  },
  {
    title: 'CSPC Payroll',
    description: `A payroll and HRIS web application for Crop Saver Philippines Corp. Features payroll generation, employee management, loan deductions, timesheets, and reporting. Built with Next.js, Ant Design, and PostgreSQL.`,
    image: 'https://i.imgur.com/YiiWR3l.jpg',
    GitHub: '#',
    hosted: 'https://staging-cspc-payroll.dev.aquilasoftwares.com/',
  },
];
