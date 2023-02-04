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
    hosted:
      'https://drive.google.com/file/d/1jSvF128oKd4pizkIhjIpiZFEoBw7kRCB/view?usp=share_link',
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
];
