import PageHero from "../components/PageHero";
import WhyUs from "../components/WhyUs";
import Financials from "../components/Financials";
import Investment from "../components/Investment";
import CTABanner from "../components/CTABanner";
import { IMAGES } from "../data/images";

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        image={IMAGES.riceFields}
        alt="Green fields against a hilltop landscape in India"
        eyebrow="Why Rana Exports"
        title="Built different. Backed by the numbers."
      />
      <WhyUs />
      <Financials />
      <Investment />
      <CTABanner
        title="Ready to partner with us?"
        text="Let's discuss how we can work together on India's livestock export opportunity."
        ctaLabel="Get In Touch"
        to="/contact"
      />
    </>
  );
}
