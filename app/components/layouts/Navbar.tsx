"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationLinks, socialLinks } from "./navigationLinks";
import Image from "next/image";
import logo from "@/public/assets/logo/logo.svg";
import Container from "../shared/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#E6E6E6] bg-white sticky top-0 z-50">
      <Container className="flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Company Logo"
            width={173}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className="px-4 py-2 rounded-full transition hover:bg-[#3D337D] hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                aria-label={link.label}
                className="text-[#FE3A81] h-8 w-8 text-lg hover:scale-110 transition"
              >
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Button */}
          <button className="primary-btn py-2 px-10">Get a Demo</button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          {/* Links */}
          {navigationLinks.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="py-2 border-b"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Social */}
          <div className="flex gap-4 text-lg pt-2">
            {socialLinks.map((link) => (
              <Link key={link.id} href={link.path}>
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Button */}
          <button className="primary-btn w-[20px] h-[35px]">Get a Demo</button>
        </div>
      </div>
    </nav>
  );
}
