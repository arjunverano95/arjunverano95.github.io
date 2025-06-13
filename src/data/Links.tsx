import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {ImGithub, ImLinkedin} from 'react-icons/im';
import {SiInstagram} from 'react-icons/si';

interface LinksType {
  title: string;
  icon: React.ReactElement;
  link: string;
}

export const Links: LinksType[] = [
  {
    title: 'GitHub',
    icon: <ImGithub />,
    link: 'https://github.com/arjunverano95',
  },
  {
    title: 'LinkedIn',
    icon: <ImLinkedin />,
    link: 'https://www.linkedin.com/in/arjun-verano/',
  },
  {
    title: 'Facebook',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/enth.astrarle/',
  },
  {
    title: 'Instagram',
    icon: <SiInstagram />,
    link: 'https://www.instagram.com/shiroganedesu/',
  },
];
