import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export interface NavigatioLink {
  id: number;
  path: string;
  label: string;
}

export const navigationLinks: NavigatioLink[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
  },
  {
    id: 1,
    path: "/demos",
    label: "Demos",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },
  {
    id: 3,
    path: "/contact",
    label: "Contact",
  },
];

type SocialLink = {
  id: number;
  icon: React.ReactNode;
  path: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: 0,
    path: "#",
    icon: <FaFacebookF />,
    label: "Facebook",
  },
  {
    id: 1,
    path: "#",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    id: 2,
    path: "#",
    icon: <FaTiktok />,
    label: "TikTok",
  },
];
