import { HOW_IT_WORKS } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";

const HowItWorks = () => {
    return (
        <Wrapper className="py-20 lg:py-32 relative">
            <div className="flex flex-col items-center text-center gap-4 py-8 w-full">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Cómo funciona" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Tres pasos hacia el éxito
                    </h1>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto">
                        Nuestro proceso de tres pasos simplifica el desarrollo web y la creación de experiencias digitales.
                    </p>
                </AnimationContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full pt-10">
                {HOW_IT_WORKS.map((item, index) => (
                    <AnimationContainer
                        key={index}
                        animation="fadeUp"
                        delay={0.5 + (index * 0.2)}
                    >
                        <div
                            className={cn(
                                "flex flex-col items-start gap-4 bg-gradient-to-b rounded-lg lg:rounded-2xl p-4 lg:p-8",
                                index % 2 === 0 ? "from-neutral-900 to-transparent" : "from-transparent to-neutral-900"
                            )}
                        >
                            <div className="flex items-center gap-x-4">
                                <AnimationContainer
                                    animation="scaleUp"
                                    delay={0.7 + (index * 0.2)}
                                >
                                    <div className="size-10 rounded-full bg-gradient-to-b from-primary to-orange-400 flex items-center justify-center">
                                        <span className="text-lg font-medium text-white">
                                            {index + 1}
                                        </span>
                                    </div>
                                </AnimationContainer>
                                <h3 className="text-lg font-medium">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="space-y-4 w-full">
                                <AnimationContainer
                                    animation="fadeUp"
                                    delay={0.9 + (index * 0.2)}
                                >
                                    <div className="w-full h-52 flex items-center justify-center">
                                        <Image
                                            src={`/images/paso${index + 1}.png`}
                                            alt={item.title}
                                            width={400}
                                            height={208}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </AnimationContainer>
                                <AnimationContainer
                                    animation="fadeUp"
                                    delay={1.1 + (index * 0.2)}
                                >
                                    <p className="text-sm md:text-base text-muted-foreground">
                                        {item.description}
                                    </p>
                                </AnimationContainer>
                            </div>
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    )
};

export default HowItWorks;
