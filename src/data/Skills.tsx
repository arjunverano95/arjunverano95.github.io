import React from 'react';
import {AiFillAndroid} from 'react-icons/ai';
import {
  FaAws,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from 'react-icons/fa';
import {ImGit} from 'react-icons/im';
import {IoLogoJavascript} from 'react-icons/io';
import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDart,
  SiDotnet,
  SiExpo,
  SiFlutter,
  SiIos,
  SiJquery,
  SiMicrosoftsqlserver,
  SiMysql,
  SiPostman,
  SiTypescript,
  SiVisualstudiocode,
  SiXcode,
} from 'react-icons/si';

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const Skills: SkillsType[] = [
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript />,
    link: 'https://www.javascript.com/',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    icon: <FaReact />,
    link: 'https://reactjs.org/',
  },
  {
    name: 'Vue.js',
    icon: <FaVuejs />,
    link: 'https://vuejs.org/',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    link: 'https://nodejs.org/',
  },
  {
    name: 'Expo',
    icon: <SiExpo />,
    link: 'https://expo.dev/',
  },
  {
    name: 'Android',
    icon: <AiFillAndroid />,
    link: 'https://developer.android.com/',
  },
  {
    name: 'IOS',
    icon: <SiIos />,
    link: 'https://developer.android.com/',
  },
  {
    name: 'Flutter',
    icon: <SiFlutter />,
    link: 'https://flutter.dev/',
  },
  {
    name: 'Dart',
    icon: <SiDart />,
    link: 'https://dart.dev/',
  },
  {
    name: 'MySQL',
    icon: <SiMysql />,
    link: 'https://www.mysql.com/',
  },
  {
    name: 'SQL Server',
    icon: <SiMicrosoftsqlserver />,
    link: 'https://www.microsoft.com/en-us/sql-server',
  },
  {
    name: 'C#',
    icon: <SiCsharp />,
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: '.NET',
    icon: <SiDotnet />,
    link: 'https://dotnet.microsoft.com/en-us/',
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'CSS',
    icon: <SiCss3 />,
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'SASS',
    icon: <FaSass />,
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap />,
    link: 'https://getbootstrap.com/',
  },
  {
    name: 'jQuery',
    icon: <SiJquery />,
    link: 'https://jquery.com/',
  },
  {
    name: 'Git',
    icon: <ImGit />,
    link: 'https://git-scm.com/',
  },
  {
    name: 'VSCode',
    icon: <SiVisualstudiocode />,
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'Xcode',
    icon: <SiXcode />,
    link: 'https://developer.apple.com/xcode/',
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
    link: 'https://www.postman.com/',
  },
  {
    name: 'AWS',
    icon: <FaAws />,
    link: 'https://aws.amazon.com/',
  },
];
