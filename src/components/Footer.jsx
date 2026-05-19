import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/appointment.png";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: FaFacebookF },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
  { href: "https://x.com", label: "X", icon: FaXTwitter },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedinIn },
];

export function MainFooter() {
  return (
    <footer className="mt-16 border-t border-emerald-200/80 bg-[radial-gradient(circle_at_12%_-20%,rgba(16,185,129,0.14),transparent_44%),radial-gradient(circle_at_88%_120%,rgba(20,184,166,0.14),transparent_38%),linear-gradient(180deg,#f8fffd_0%,#ecfdf5_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
               <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-1 shadow-sm">
                              <Image
                                width={40}
                                height={40}
                                src={Logo}
                                alt="doctor appointment logo"
                                className="rounded-xl"
                              />
                            </div>
              <span className="text-2xl font-extrabold tracking-tight text-emerald-950">DocAppoint</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-emerald-900/75">
              A smart doctor appointment platform to discover specialists, secure your preferred time slot, and manage your bookings in one clean dashboard.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-900/80">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-900/75">
              <li>
                <Link href="/" className="transition hover:text-emerald-600">Home</Link>
              </li>
              <li>
                <Link href="/all-appointments" className="transition hover:text-emerald-600">All Appointment</Link>
              </li>
              <li>
                <Link href="/dashboard" className="transition hover:text-emerald-600">Dashboard</Link>
              </li>
              <li>
                <Link href="/login" className="transition hover:text-emerald-600">Login</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-900/80">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-emerald-900/75">
              <p>
                Email: <a href="mailto:support@docappoint.com" className="transition hover:text-emerald-600">support@docappoint.com</a>
              </p>
              <p>
                Phone: <a href="tel:+8801712345678" className="transition hover:text-emerald-600">+880 1712 345678</a>
              </p>
              <p>Hours: Sat-Thu, 9:00 AM - 8:00 PM</p>
            </div>

            <div className="mt-5">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition hover:brightness-95"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-emerald-200/80 pt-4 text-xs text-emerald-900/60 sm:flex-row">
          <p>Copyright {new Date().getFullYear()} DocAppoint. All rights reserved.</p>
          <p>Designed for smooth and secure appointment booking.</p>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;