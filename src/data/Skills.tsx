import React from 'react';
import {AiFillAndroid} from 'react-icons/ai';
import {
  FaAws,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
  FaDatabase,
  FaApple,
} from 'react-icons/fa';
import {ImGit} from 'react-icons/im';
import {IoLogoJavascript} from 'react-icons/io';
import {
  SiBootstrap,
  SiCss3,
  SiDart,
  SiDotnet,
  SiExpo,
  SiFlutter,
  SiJquery,
  SiMysql,
  SiPostman,
  SiTypescript,
} from 'react-icons/si';
import {VscCode} from 'react-icons/vsc';

interface SkillsType {
  name: string;
  icon: React.ReactElement;
  link: string;
}

export const Skills: SkillsType[] = [
  {
    name: 'JavaScript',
    icon: React.createElement(IoLogoJavascript),
    link: 'https://www.javascript.com/',
  },
  {
    name: 'TypeScript',
    icon: React.createElement(SiTypescript),
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    icon: React.createElement(FaReact),
    link: 'https://reactjs.org/',
  },
  {
    name: 'Vue.js',
    icon: React.createElement(FaVuejs),
    link: 'https://vuejs.org/',
  },
  {
    name: 'Node.js',
    icon: React.createElement(FaNodeJs),
    link: 'https://nodejs.org/',
  },
  {
    name: 'Expo',
    icon: React.createElement(SiExpo),
    link: 'https://expo.dev/',
  },
  {
    name: 'Android',
    icon: React.createElement(AiFillAndroid),
    link: 'https://developer.android.com/',
  },
  {
    name: 'IOS',
    icon: React.createElement(FaApple),
    link: 'https://developer.apple.com/',
  },
  {
    name: 'Flutter',
    icon: React.createElement(SiFlutter),
    link: 'https://flutter.dev/',
  },
  {
    name: 'Dart',
    icon: React.createElement(SiDart),
    link: 'https://dart.dev/',
  },
  {
    name: 'MySQL',
    icon: React.createElement(SiMysql),
    link: 'https://www.mysql.com/',
  },
  {
    name: 'SQL Server',
    icon: React.createElement(FaDatabase),
    link: 'https://www.microsoft.com/en-us/sql-server',
  },
  {
    name: 'C#',
    icon: React.createElement(SiDotnet),
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: '.NET',
    icon: React.createElement(SiDotnet),
    link: 'https://dotnet.microsoft.com/en-us/',
  },
  {
    name: 'HTML',
    icon: React.createElement(FaHtml5),
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'CSS',
    icon: React.createElement(SiCss3),
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'SASS',
    icon: React.createElement(FaSass),
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Bootstrap',
    icon: React.createElement(SiBootstrap),
    link: 'https://getbootstrap.com/',
  },
  {
    name: 'jQuery',
    icon: React.createElement(SiJquery),
    link: 'https://jquery.com/',
  },
  {
    name: 'Git',
    icon: React.createElement(ImGit),
    link: 'https://git-scm.com/',
  },
  {
    name: 'VSCode',
    icon: React.createElement(VscCode),
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'Xcode',
    icon: React.createElement(FaApple),
    link: 'https://developer.apple.com/xcode/',
  },
  {
    name: 'Postman',
    icon: React.createElement(SiPostman),
    link: 'https://www.postman.com/',
  },
  {
    name: 'AWS',
    icon: React.createElement(FaAws),
    link: 'https://aws.amazon.com/',
  },
];
