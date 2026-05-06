import facebook from '@/public/assets/navbar/icons/facebook.svg';
import instagram from '@/public/assets/navbar/icons/instagram.svg';
import tiktok from '@/public/assets/navbar/icons/tiktok.svg';

export interface NavigatioLink {
  id: number;
  path: string;
  label: string;
}

export const navigationLinks: NavigatioLink[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
  },
  {
    id: 1,
    path: '/demos',
    label: 'Demos',
  },
  {
    id: 2,
    path: '/about',
    label: 'About',
  },
  {
    id: 3,
    path: '/contact',
    label: 'Contact',
  },
];

type SocialLink = {
  id: number;
  src: string;
  path: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: 0,
    path: 'https://www.facebook.com',
    src: facebook,
    label: 'Facebook',
  },
  {
    id: 1,
    path: 'https://www.instagram.com',
    src: instagram,
    label: 'Instagram',
  },
  {
    id: 2,
    path: 'https://www.tiktok.com',
    src: tiktok,
    label: 'TikTok',
  },
];
