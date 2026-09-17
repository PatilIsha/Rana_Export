import Hero from "../components/Hero";
import Challenge from "../components/Challenge";
import Solution from "../components/Solution";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenge />
      <Solution />
      <CTABanner
        title="Curious how the numbers stack up?"
        text="See our financial projections, funding plan, and expected returns."
        ctaLabel="View Why Us"
        to="/why-us"
      />
    </>
  );
}
