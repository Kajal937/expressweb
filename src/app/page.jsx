import Image from "next/image";
import Navbar from "../components/navbar/index"
import HomeTopSection from "../components/HomeTopSection"
import BoostProductivity from "../components/BoostProductivity"
import JamPacked from "../components/JamPacked"
import Employee from "../components/Employee"
import PricingOptions from "../components/PricingOptions"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <>
      <Navbar />
      <HomeTopSection />
      <BoostProductivity />
      <JamPacked />
      <Employee />
      <PricingOptions />
      <Footer />
    </>
  );
}
