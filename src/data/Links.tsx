import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {ImGithub, ImLinkedin} from 'react-icons/im';
import {SiInstagram} from 'react-icons/si';

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const Links: LinksType[] = [
  {
    title: 'GitHub',
    icon: React.createElement(ImGithub),
    link: 'https://github.com/arjunverano95',
  },
  {
    title: 'LinkedIn',
    icon: React.createElement(ImLinkedin),
    link: 'https://www.linkedin.com/in/arjun-verano/',
  },
  {
    title: 'Facebook',
    icon: React.createElement(FaFacebook),
    link: 'https://www.facebook.com/enth.astrarle/',
  },
  {
    title: 'Instagram',
    icon: React.createElement(SiInstagram),
    link: 'https://www.instagram.com/shiroganedesu/',
  },
];
