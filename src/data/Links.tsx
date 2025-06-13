import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

interface LinksType {
  title: string;
  icon: React.ReactElement;
  link: string;
}

export const Links: LinksType[] = [
  {
    title: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/arjunverano95',
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/arjun-verano/',
  },
  {
    title: 'Facebook',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/enth.astrarle/',
  },
  {
    title: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/shiroganedesu/',
  },
];
