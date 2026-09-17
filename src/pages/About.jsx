import PageHero from "../components/PageHero";
import Market from "../components/Market";
import Roadmap from "../components/Roadmap";
import Leadership from "../components/Leadership";
import SocialImpact from "../components/SocialImpact";
import { IMAGES } from "../data/images";

export default function About() {
  return (
    <>
      <PageHero
        image={IMAGES.greenHills}
        alt="Green hills landscape in India"
        eyebrow="About Us"
        title="Our story, our vision, our people"
      />
      <Market />
      <Roadmap />
      <Leadership />
      <SocialImpact />
    </>
  );
}
