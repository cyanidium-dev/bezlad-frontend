import CTAContactUs from "@/components/homePage/ctaContactUs/CTAContactUs";
import CTAOrder from "@/components/homePage/ctaOrder/CTAOrder";
import Faq from "@/components/homePage/faq/Faq";
import Hero from "@/components/homePage/hero/Hero";
import PriceList from "@/components/homePage/priceList/PriceList";
import Advantages from "@/components/homePage/advantages/Advantages";
import Gallery from "@/components/homePage/gallery/Gallery";
import { ALL_SERVICES_QUERY, GALLERY_IMAGES } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";

export default async function HomePage() {
  const services = await fetchSanityData(ALL_SERVICES_QUERY);
  const gallery = await fetchSanityData(GALLERY_IMAGES);

  return (
    <>
      <Hero />
      <PriceList />
      <Advantages />
      <Gallery />
      <CTAOrder />
      <Faq />
      <CTAContactUs />
    </>
  );
}
