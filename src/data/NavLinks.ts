import React from 'react';
import {FiHome, FiUser, FiBriefcase, FiFolder, FiMail} from 'react-icons/fi';

interface NavLinkType {
  title: string;
  link: string;
  icon: React.ReactElement;
}

export const NavLinks: NavLinkType[] = [
  {
    title: 'Home',
    link: '/',
    icon: React.createElement(FiHome),
  },
  {
    title: 'Skills',
    link: '/skills',
    icon: React.createElement(FiUser),
  },
  {
    title: 'Experience',
    link: '/experience',
    icon: React.createElement(FiBriefcase),
  },
  {
    title: 'Projects',
    link: '/projects',
    icon: React.createElement(FiFolder),
  },
  {
    title: 'Contact',
    link: '/contact',
    icon: React.createElement(FiMail),
  },
];
