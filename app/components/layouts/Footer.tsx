import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo/logo-light.svg";
import Container from "../shared/Container";
import { navigationLinks, socialLinks } from "./navigationLinks";

type LinkType = {
  id: number;
  path: string;
  label: string;
};

export default function Footer() {
  const footerLinks: LinkType[] = [
    ...navigationLinks,
    { id: 4, path: "/privacy-policy", label: "Privacy Policy" },
    { id: 5, path: "/terms-of-service", label: "Terms of Service" },
  ];

  return (
    <footer className="bg-[#0B0133] text-white py-12">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section */}
          <div className="space-y-4">
            <Image src={logo} alt="Logo" width={120} height={40} />

            <p className="text-sm text-gray-300">
              Copyright © Pitaya. All rights reserved.
            </p>
          </div>

          {/* Links Section */}
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="text-gray-300 hover:text-pink-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex flex-col items-start lg:items-end gap-5">
            {/* Button */}
            <button className="primary-btn px-6 py-2">Get a Demo</button>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl text-pink-400">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  aria-label={link.label}
                  className="hover:scale-110 transition"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
