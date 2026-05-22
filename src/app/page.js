import HeroSlider from "@/components/Banner";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeWhyChoose from "@/components/HomeWhyChoose";
import TopRatedDoc from "@/components/TopRatedDoc";
import { fetchDoctorsData } from "@/services/data";

export default async function Home() {
  const doctorsData = await fetchDoctorsData();

  return (
    <div>
      <HeroSlider />
      <TopRatedDoc doctorsData={doctorsData} />
      <HomeWhyChoose />
      <HomeHowItWorks />
    </div>
  );
}

export const metadata = {
  title: "Home | DocAppoint",
  description:
    "DocAppoint — Book trusted doctors, manage appointments, and get notified about bookings.",
  openGraph: {
    title: "Home | DocAppoint",
    description:
      "DocAppoint — Book trusted doctors, manage appointments, and get notified about bookings.",
    url: "https://client-doc-appointment.vercel.app",
    siteName: "DocAppoint",
  },
};
