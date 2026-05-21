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
