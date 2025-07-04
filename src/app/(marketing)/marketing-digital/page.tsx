"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
import AnimationContainer from "@/components/global/animation-container";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Wrapper from "@/components/global/wrapper";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import Images from "@/components/global/images";

const MarketingDigitalPage = () => {
  const companies = [
    Images.comp1,
    Images.comp2,
    Images.comp3,
    Images.comp4,
    Images.comp5,
    Images.comp6,
  ];

  return (
    <div className="w-full relative flex flex-col">
      <section className="w-full relative">
        <div className="absolute inset-0 z-0">
          <BackgroundBeamsWithCollision>
            <div></div>
          </BackgroundBeamsWithCollision>
        </div>
        <Wrapper className="flex items-center justify-center min-h-screen w-full h-full pt-32 relative z-10">
          <div className="flex flex-col lg:flex-row w-full h-full lg:gap-24">
            <div className="flex flex-col items-start gap-10 py-8 w-full lg:w-3/5">
              <div className="flex flex-col items-start gap-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                  <SectionBadge title="Marketing Digital Profesional" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                  <h1 className="text-5xl lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-neutral-500">
                    Marketing inteligente y <Cover className="">optimizado</Cover> para creecer
                  </h1>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.6}>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                    Exponencia tu negocio en línea con estrategias de marketing digital que generan resultados.
                  </p>
                </AnimationContainer>
              </div>

              <AnimationContainer animation="fadeUp" delay={0.8}>
                <div className="w-full">
                  <Link href="/">
                    <Button size="md" className="w-full md:w-auto">
                      Quiero empezar
                    </Button>
                  </Link>
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={1}>
                <div className="flex flex-col items-start gap-4 py-4">
                  <div className="h-6"></div> {/* Espacio para el texto */}
                  <div className="h-16"></div> {/* Espacio para el marquee */}
                </div>
              </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeRight" delay={0.4}>
              <div className="flex flex-col items-start justify-start w-full h-min relative overflow-visible lg:w-2/5 lg:flex lg:justify-end">
                <div className="lg:aspect-[1.3884514435695539/1] w-full relative">
                  <div className="lg:absolute lg:inset-0">
                    <Image
                      src="/images/dashboard.png"
                      alt="marketing digital"
                      sizes="1000px"
                      width={1024}
                      height={1024}
                      className="object-contain min-w-full h-auto rounded-xl lg:rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </AnimationContainer>
          </div>
          <AnimationContainer animation="scaleUp" delay={1.2} className="absolute w-2/3 h-auto -top-[8%] left-1/4 -z-10">
            <Image
              src="/images/hero-gradient.svg"
              alt="hero"
              width={1024}
              height={1024}
              className="object-cover w-full h-auto"
            />
          </AnimationContainer>
        </Wrapper>
      </section>

      {/* Aquí puedes agregar más secciones para el contenido de marketing digital */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nuestros Servicios de Marketing Digital
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">SEO & SEM</h3>
              <p className="text-muted-foreground">
                Optimización para motores de búsqueda y publicidad pagada
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Redes Sociales</h3>
              <p className="text-muted-foreground">
                Gestión y estrategias para redes sociales
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
              <p className="text-muted-foreground">
                Campañas de email marketing efectivas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingDigitalPage; 