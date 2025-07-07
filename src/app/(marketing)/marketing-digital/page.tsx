import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
import AnimationContainer from "@/components/global/animation-container";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Wrapper from "@/components/global/wrapper";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import Perks from "@/components/perks";
import Images from "@/components/global/images";
import Features from "@/components/features";
import { generateMetadata } from "@/utils";
import MarketingDigitalClient from "./marketing-digital-client";

export const metadata = generateMetadata({
  title: "Marketing Digital - Esencia Code",
  description: "Marketing inteligente y optimizado para crecer. Estrategias de marketing digital que generan resultados medibles.",
  image: "/images/banner.png"
});

const MarketingDigitalPage = () => {
  return <MarketingDigitalClient />;
};

export default MarketingDigitalPage; 