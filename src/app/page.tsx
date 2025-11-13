import { ALL_SERVICES_QUERY, GALLERY_IMAGES } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";

export default async function HomePage() {
  const services = await fetchSanityData(ALL_SERVICES_QUERY);
  const gallery = await fetchSanityData(GALLERY_IMAGES);

  return <></>;
}
