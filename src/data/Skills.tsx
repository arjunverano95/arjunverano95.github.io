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
    icon: <IoLogoJavascript color="#000000dc" />,
    link: 'https://www.javascript.com/',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript color="#000000dc" />,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    icon: <FaReact color="#000000dc" />,
    link: 'https://reactjs.org/',
  },
  {
    name: 'Vue.js',
    icon: <FaVuejs color="#000000dc" />,
    link: 'https://vuejs.org/',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs color="#000000dc" />,
    link: 'https://nodejs.org/',
  },
  {
    name: 'Expo',
    icon: <SiExpo color="#000000dc" />,
    link: 'https://expo.dev/',
  },
  {
    name: 'Android',
    icon: <AiFillAndroid color="#000000dc" />,
    link: 'https://developer.android.com/',
  },
  {
    name: 'IOS',
    icon: <SiIos color="#000000dc" />,
    link: 'https://developer.android.com/',
  },
  {
    name: 'Flutter',
    icon: <SiFlutter color="#000000dc" />,
    link: 'https://flutter.dev/',
  },
  {
    name: 'Dart',
    icon: <SiDart color="#000000dc" />,
    link: 'https://dart.dev/',
  },
  {
    name: 'MySQL',
    icon: <SiMysql color="#000000dc" />,
    link: 'https://www.mysql.com/',
  },
  {
    name: 'SQL Server',
    icon: <SiMicrosoftsqlserver color="#000000dc" />,
    link: 'https://www.microsoft.com/en-us/sql-server',
  },
  {
    name: 'C#',
    icon: <SiCsharp color="#000000dc" />,
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: '.NET',
    icon: <SiDotnet color="#000000dc" />,
    link: 'https://dotnet.microsoft.com/en-us/',
  },
  {
    name: 'HTML',
    icon: <FaHtml5 color="#000000dc" />,
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'CSS',
    icon: <SiCss3 color="#000000dc" />,
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'SASS',
    icon: <FaSass color="#000000dc" />,
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap color="#000000dc" />,
    link: 'https://getbootstrap.com/',
  },
  {
    name: 'jQuery',
    icon: <SiJquery color="#000000dc" />,
    link: 'https://jquery.com/',
  },
  {
    name: 'Git',
    icon: <ImGit color="#000000dc" />,
    link: 'https://git-scm.com/',
  },
  {
    name: 'VSCode',
    icon: <SiVisualstudiocode color="#000000dc" />,
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'Xcode',
    icon: <SiXcode color="#000000dc" />,
    link: 'https://developer.apple.com/xcode/',
  },
  {
    name: 'Postman',
    icon: <SiPostman color="#000000dc" />,
    link: 'https://www.postman.com/',
  },
  {
    name: 'AWS',
    icon: <FaAws color="#000000dc" />,
    link: 'https://aws.amazon.com/',
  },
];
