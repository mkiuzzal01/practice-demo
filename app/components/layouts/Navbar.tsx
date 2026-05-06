'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationLinks, socialLinks } from './navigationLinks';
import Image from 'next/image';
import logo from '@/public/assets/logo/logo.svg';
import Container from '../shared/Container';
import PrimaryButton from '../shared/PrimaryButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#E6E6E6] bg-white sticky top-0 z-50">
      <Container className="flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={logo}
            alt="Company Logo"
            width={173}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className="px-6 py-2.5 rounded-full transition hover:bg-[#3D337D] hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-[92px]">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                aria-label={link.label}
                className="flex items-center justify-center"
              >
                <Image src={link.src} alt={link.label} width={32} height={32} />
              </Link>
            ))}
          </div>

          {/* Button */}
          <PrimaryButton title="Get a Demo" className="px-10 py-2.5" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[#E6E6E6] bg-white">
          <div className="flex flex-col gap-4 px-6 py-6">
            {/* Links */}
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-full hover:bg-[#3D337D] hover:text-white transition w-fit"
              >
                {link.label}
              </Link>
            ))}

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  <Image
                    src={link.src}
                    alt={link.label}
                    width={28}
                    height={28}
                  />
                </Link>
              ))}
            </div>

            <PrimaryButton title="Get a Demo" className="px-10 py-2.5" />
          </div>
        </div>
      )}
    </nav>
  );
}
