"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Imported to handle custom SVGs safely
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01]"
        >
          {/* Replaced Landmark icon wrapper with a clean, responsive Image frame */}
          <div className="bg-blue-50 p-1.5 rounded-xl group-hover:bg-blue-100 transition-colors flex items-center justify-center">
            <Image 
              src="/mkf-logo.svg" // Paths pointing to the public/ directory start with a leading slash
              alt="Mama Kevina Foundation Logo"
              width={32} 
              height={32}
              className="h-8 w-8 object-contain"
              priority // Forces Next.js to load the navbar logo instantly
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl text-slate-900 tracking-tight leading-none">
              MAMA KEVINA
            </span>
            <span className="text-[10px] font-bold text-emerald-600 tracking-[0.2em] mt-1 leading-none">
              FOUNDATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-green-500 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-5 gap-2 shadow-sm shadow-emerald-100 transition-all active:scale-[0.98]"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Heart className="h-4 w-4 fill-current" />
              Support Us
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Sidebar Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 border-b border-slate-100 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-blue-700 py-2 border-b border-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl gap-2 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Heart className="h-4 w-4 fill-current" />
                  Support Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}