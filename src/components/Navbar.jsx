"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Logo from "../assets/appointment.png";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Appointment", href: "/all-appointments" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  const pathname = usePathname() || "/";

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-emerald-200/70 bg-white/85 py-2 shadow-lg shadow-emerald-900/10 backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-1 shadow-sm">
                <Image
                  width={40}
                  height={40}
                  src={Logo}
                  alt="doctor appointment logo"
                  className="rounded-xl"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-emerald-900">
                DocAppoint
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-2 py-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                      : "text-emerald-800 hover:bg-emerald-100 hover:text-emerald-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {
            !user ? <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button className ="text-sm font-semibold text-emerald-800 transition-colors hover:text-emerald-950 bg-emerald-100 px-8">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 font-bold text-white shadow-lg shadow-emerald-700/20">
                Register
              </Button>
            </Link>
          </div> : <div className="flex justify-center items-center gap-4">
                <p className="text-sm text-gray-500">Welcome, {user.name}!</p>
                <Avatar>
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer" />
                  <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <Button variant="danger" onClick={() => authClient.signOut()}>
                  Logout
                </Button>
              </div>
          }

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl border border-emerald-200 bg-emerald-50 p-2 text-emerald-900 transition-colors hover:bg-emerald-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="animate-in slide-in-from-top duration-300 border-b border-emerald-200 bg-white px-4 pb-6 pt-2 md:hidden">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? "bg-emerald-100 text-emerald-900" : "text-emerald-900 hover:bg-emerald-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 border-t border-emerald-100 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="bordered" className="w-full rounded-xl border-emerald-300 text-emerald-800 ">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}