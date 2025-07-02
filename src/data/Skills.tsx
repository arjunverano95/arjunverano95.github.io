import {
  FaAws,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
  FaDatabase,
  FaApple,
  FaAndroid,
  FaGit,
  FaJs,
  FaCode,
  FaBootstrap,
  FaCss3,
  FaDotCircle,
  FaJsSquare,
} from 'react-icons/fa';

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const Skills: SkillsType[] = [
  {
    name: 'JavaScript',
    icon: FaJsSquare,
    link: 'https://www.javascript.com/',
  },
  {
    name: 'TypeScript',
    icon: FaJs,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    icon: FaReact,
    link: 'https://reactjs.org/',
  },
  {
    name: 'Vue.js',
    icon: FaVuejs,
    link: 'https://vuejs.org/',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    link: 'https://nodejs.org/',
  },
  {
    name: 'Expo',
    icon: FaReact,
    link: 'https://expo.dev/',
  },
  {
    name: 'Android',
    icon: FaAndroid,
    link: 'https://developer.android.com/',
  },
  {
    name: 'IOS',
    icon: FaApple,
    link: 'https://developer.apple.com/',
  },
  {
    name: 'Flutter',
    icon: FaAndroid,
    link: 'https://flutter.dev/',
  },
  {
    name: 'Dart',
    icon: FaDotCircle,
    link: 'https://dart.dev/',
  },
  {
    name: 'MySQL',
    icon: FaDatabase,
    link: 'https://www.mysql.com/',
  },
  {
    name: 'SQL Server',
    icon: FaDatabase,
    link: 'https://www.microsoft.com/en-us/sql-server',
  },
  {
    name: 'C#',
    icon: FaDotCircle,
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: '.NET',
    icon: FaDotCircle,
    link: 'https://dotnet.microsoft.com/en-us/',
  },
  {
    name: 'HTML',
    icon: FaHtml5,
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'CSS',
    icon: FaCss3,
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'SASS',
    icon: FaSass,
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Bootstrap',
    icon: FaBootstrap,
    link: 'https://getbootstrap.com/',
  },
  {
    name: 'jQuery',
    icon: FaJs,
    link: 'https://jquery.com/',
  },
  {
    name: 'Git',
    icon: FaGit,
    link: 'https://git-scm.com/',
  },
  {
    name: 'VSCode',
    icon: FaCode,
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'Xcode',
    icon: FaApple,
    link: 'https://developer.apple.com/xcode/',
  },
  {
    name: 'Postman',
    icon: FaCode,
    link: 'https://www.postman.com/',
  },
  {
    name: 'AWS',
    icon: FaAws,
    link: 'https://aws.amazon.com/',
  },
];
