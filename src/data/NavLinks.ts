interface NavLinkType {
  title: string;
  linkTo: string;
}

export const NavLinks: NavLinkType[] = [
  {
    title: 'Home',
    linkTo: '/',
  },
  {
    title: 'Skills',
    linkTo: '/skills',
  },
  {
    title: 'Experience',
    linkTo: '/experience',
  },
  {
    title: 'Projects',
    linkTo: '/projects',
  },
  {
    title: 'Contact',
    linkTo: '/contact',
  },
];
