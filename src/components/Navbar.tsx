"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, Code2, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang", href: "/#about" },
    { label: "Divisi", href: "/#divisions" },
    { label: "Prestasi", href: "/#achievements" },
    { label: "Pengurus", href: "/#members" },
    { label: "Galeri", href: "/#gallery" },
    { label: "Blog", href: "/blogs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "border-b-2 border-black bg-white/95 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-950/95 shadow-[0_4px_0_0_rgba(0,0,0,0.05)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with Lego Stud Accents */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-amber-300 text-black shadow-[2px_2px_0px_0px_#000] transition-transform group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_0px_#000] dark:border-zinc-700 dark:bg-amber-400 dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
            <Code2 className="h-5 w-5 transition-transform group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-base tracking-tighter text-zinc-950 dark:text-zinc-50">
                FOSTI
              </span>
              <span className="rounded-md border border-black bg-red-600 px-1.5 py-0.2 text-[10px] font-black text-white shadow-[1px_1px_0px_0px_#000] dark:border-zinc-700">
                UMS
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                Open Source Forum
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-xs lg:text-sm font-bold tracking-tight text-zinc-700 transition-all hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-black hover:border-black dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://oprec.fostiums.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-xl border-2 border-black bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#000] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] dark:border-zinc-700 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span>Join FOSTI</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_#000] transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b-2 border-black bg-white px-4 pt-3 pb-6 shadow-[0_6px_0_0_#000] dark:border-zinc-700 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl border-2 border-black bg-zinc-50 px-4 py-2.5 text-sm font-bold text-zinc-800 shadow-[2px_2px_0px_0px_#000] hover:bg-amber-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://oprec.fostiums.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-red-600 px-4 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#000] hover:bg-red-700"
              >
                <span>Daftar Open Recruitment</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
