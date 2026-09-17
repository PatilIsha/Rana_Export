import Hero from "../components/Hero";
import Challenge from "../components/Challenge";
import Solution from "../components/Solution";
import ProcessTeaser from "../components/ProcessTeaser";
import WhyChooseTeaser from "../components/WhyChooseTeaser";
import StatsBand from "../components/StatsBand";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenge />
      <Solution />
      <ProcessTeaser />
      <WhyChooseTeaser />
      <StatsBand />
      <CTABanner
        title="Ready to build this with us?"
        text="Let's talk about how Rana Exports & Logistics can work for you."
        ctaLabel="Get In Touch"
        to="/contact"
      />
    </>
  );
}
