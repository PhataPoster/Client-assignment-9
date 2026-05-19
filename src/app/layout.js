import { Outfit} from "next/font/google";
import "./globals.css";
import { MainNavbar } from "@/components/Navbar";
import { MainFooter } from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor appointment management system",
  description: "A doctor appointment management system is a software application designed to streamline the scheduling and management of appointments between patients and healthcare providers. It typically includes features such as appointment booking, calendar management, patient records, and communication tools to enhance the efficiency of healthcare services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-emerald-50/20">
        <MainNavbar />
        <main className="flex-1">{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
