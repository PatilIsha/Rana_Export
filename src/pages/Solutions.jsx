import PageHero from "../components/PageHero";
import Operations from "../components/Operations";
import BusinessModel from "../components/BusinessModel";
import ExportGallery from "../components/ExportGallery";
import GrowthStrategy from "../components/GrowthStrategy";
import CTABanner from "../components/CTABanner";
import { IMAGES } from "../data/images";

export default function Solutions() {
  return (
    <>
      <PageHero
        image={IMAGES.truckFleet}
        alt="Livestock transport truck on the highway"
        eyebrow="Our Solutions"
        title="How we run a compliant, end-to-end supply chain"
      />
      <Operations />
      <BusinessModel />
      <ExportGallery />
      <GrowthStrategy />
      <CTABanner
        title="See what sets us apart"
        text="Explore our competitive advantages and the standards we hold every shipment to."
        ctaLabel="Explore Why Us"
        to="/why-us"
      />
    </>
  );
}
