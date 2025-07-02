import {FiHome, FiUser, FiBriefcase, FiFolder, FiMail} from 'react-icons/fi';

interface NavLinkType {
  title: string;
  link: string;
  icon: any;
}

export const NavLinks: NavLinkType[] = [
  {
    title: 'Home',
    link: '/',
    icon: FiHome,
  },
  {
    title: 'Skills',
    link: '/skills',
    icon: FiUser,
  },
  {
    title: 'Experience',
    link: '/experience',
    icon: FiBriefcase,
  },
  {
    title: 'Projects',
    link: '/projects',
    icon: FiFolder,
  },
  {
    title: 'Contact',
    link: '/contact',
    icon: FiMail,
  },
];
