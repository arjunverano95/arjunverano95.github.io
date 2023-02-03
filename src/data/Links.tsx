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
    icon: <ImGithub color="#000000dc" />,
    link: 'https://github.com/arjunverano95',
  },
  {
    title: 'LinkedIn',
    icon: <ImLinkedin color="#000000dc" />,
    link: 'https://www.linkedin.com/in/arjun-verano/',
  },
  {
    title: 'Facebook',
    icon: <FaFacebook color="#000000dc" />,
    link: 'https://www.facebook.com/enth.astrarle/',
  },
  {
    title: 'Instagram',
    icon: <SiInstagram color="#000000dc" />,
    link: 'https://www.instagram.com/shiroganedesu/',
  },
];
