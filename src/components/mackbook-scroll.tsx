"use client";

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Wrapper from "./global/wrapper";
import AnimationContainer from "./global/animation-container";
import { Button } from "./ui/button";

export function MacbookScrollDemo() {
  return (
    <Wrapper className="flex items-center justify-center min-h-screen w-full h-full pt-16">
      <div className="flex flex-col lg:flex-row w-full h-full lg:gap-16">
        <div className="flex flex-col items-start gap-10 py-8 w-full">
          <div className="flex flex-col items-start gap-4">

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <h1 className="text-5xl lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-neutral-500">
                <span>Creamos </span>
                <PointerHighlight>
                  <span>experiencias</span>
                </PointerHighlight>
                <span> digitales</span>
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                Desarrollamos soluciones web y móviles innovadoras que transforman tu negocio y conectan con tu audiencia de manera efectiva.
              </p>
            </AnimationContainer>
          </div>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                size="md" 
                className="w-full md:w-auto"
                onClick={() => window.open("https://wa.me/+525539582942", "_blank")}
              >
                Quiero mi página web
              </Button>
              {/* <Button variant="outline" size="md" className="w-full md:w-auto">
                Ver portafolio
              </Button> */}
            </div>
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeRight" delay={0.4}>
          <div className="flex flex-col items-center justify-center w-full h-min relative overflow-visible">
            <MacbookScroll
              title=""
              src={`/linear.webp`}
              showGradient={false} />
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
}
