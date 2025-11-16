import CTAContactUs from "@/components/homePage/ctaContactUs/CTAContactUs";
import CTAOrder from "@/components/homePage/ctaOrder/CTAOrder";
import Hero from "@/components/homePage/hero/Hero";
import { ALL_SERVICES_QUERY, GALLERY_IMAGES } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";
import InteractiveZones from "@/components/homePage/interactiveZones/InteractiveZones";

export default async function HomePage() {
    const services = await fetchSanityData(ALL_SERVICES_QUERY);
    const gallery = await fetchSanityData(GALLERY_IMAGES);

    return (
        <>
            <Hero />
            <CTAOrder />
            <CTAContactUs />
            <InteractiveZones />
        </>
    );

}
