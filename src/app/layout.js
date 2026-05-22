import { Outfit} from "next/font/google";
import "./globals.css";
import { MainNavbar } from "@/components/Navbar";
import { MainFooter } from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor appointment management system",
  description:
    "A doctor appointment management system is a software application designed to streamline scheduling and managing appointments between patients and healthcare providers. Book, update, and manage appointments with DocAppoint.",
  applicationName: "DocAppoint",
  keywords: ["doctor", "appointments", "healthcare", "booking", "DocAppoint"],
  authors: [{ name: "DocAppoint" }],
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#06201a" }],
  openGraph: {
    title: "DocAppoint - Doctor appointment management system",
    description:
      "Book trusted doctors, manage appointments, and get notifications with DocAppoint.",
    url: "https://client-doc-appointment.vercel.app",
    siteName: "DocAppoint",
    images: [
      {
        url: "https://client-doc-appointment.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "DocAppoint - Book trusted doctors",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-emerald-50/20">
        <ToastContainer />
        <MainNavbar />
        <main className="flex-1">{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
