"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import avater from "/public/avater.jpg";
import logo from "/public/logo.png";

const navItems = [
  "Home",
  "Get Started",
  "Solutions",
  "Features",
  "Pricing",
  "About",
  "Blog",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="  bg-[#043873] sticky top-0 z-50">
      <div className="container mx-auto  px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient flex items-center gap-2">
          <span>
            <Image
              src={logo}
              alt="Logo"
              width={36}
              height={36}
              className="rounded-full cursor-pointer"
            />
          </span>
          <span className="hidden md:flex items-center">
            Bauman<span className="text-[#FFE492]">Auctions</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const link = `/${item.toLowerCase()}`;
            const isActive =
              pathname === link || (item === "Home" && pathname === "/");

            return (
              <li key={item} className="group relative">
                <Link
                  href={link}
                  className={`font-medium transition-all duration-200 ${
                    isActive ? "text-[#FFE492]" : "text-white"
                  }`}
                >
                  {item}
                </Link>
                <motion.div
                  layoutId="underline"
                  className={`absolute h-[2px] -bottom-1 left-0 right-0 origin-left transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100 bg-[#FFE492]"
                      : "scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-[#06c6f7] to-[#FFE492]"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Right Side - Buttons + Profile */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="bg-[#4F9CF9]">
            Try Whitepeac Free
          </Button>
          <Button
            asChild
            className="bg-[#FFE492] text-[#043873] hover:bg-transparent  border-2 hover:border-[#FFE492] hover:text-[#FFE492]"
          >
            <Link href="/login">Login</Link>
          </Button>

          {/* Profile Avatar Dropdown */}
          <div className="relative group ml-4">
            <Image
              src={avater}
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full cursor-pointer"
            />
            <ul className="absolute right-0 mt-2 text-white w-40 bg-[#043873] shadow-lg rounded-md border opacity-0 group-hover:opacity-100 transition duration-300 z-10">
              <li className="px-4 py-2 hover:bg-[#FFE492] hover:text-[#043873] cursor-pointer">
                Dashboard
              </li>
              <li className="px-4 py-2 hover:bg-[#FFE492] hover:text-[#043873] cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-[#FFE492] hover:text-[#043873] cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-[#043873] flex flex-col justify-center items-center px-4 pb-6 space-y-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item} className=" relative">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block text-white font-medium text-center"
                >
                  {item}
                </Link>
                <motion.div
                  layoutId="underline"
                  className="absolute h-[2px] -bottom-1 bg-gradient-to-r from-[#06c6f7] to-[#FFE492] left-0 right-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="bg-[#4F9CF9]">
              Try Whitepeac Free
            </Button>
            <Button
              asChild
              className="bg-[#FFE492] text-[#043873] hover:bg-transparent  border-2 hover:border-[#FFE492] hover:text-[#FFE492]"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
