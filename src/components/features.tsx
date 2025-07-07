import { FEATURES } from '@/constants';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const Features = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Campañas Publicitarias" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Maximiza tu ROI con campañas inteligentes
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Llega a tu audiencia ideal con estrategias de publicidad digital que generan resultados medibles y crecimiento sostenible.
                    </p>
                </AnimationContainer>
            </div>

            <div className="flex flex-col gap-6 px-1 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] gap-6">
                    <AnimationContainer animation="fadeRight" delay={0.5}>
                        <div className="relative rounded-3xl bg-[#191919] backdrop-blur-3xl overflow-hidden min-h-[400px]">
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <AnimationContainer animation="fadeUp" delay={0.6}>
                                    <div className="space-y-4">
                                        <h3 className="text-xl md:text-2xl font-medium">
                                            Google Ads & SEO
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground max-w-md">
                                            Optimiza tu presencia en Google con campañas de búsqueda, display y shopping que conectan con usuarios en el momento exacto de la decisión de compra.
                                        </p>
                                    </div>
                                </AnimationContainer>
                                <AnimationContainer animation="fadeUp" delay={0.7}>
                                    <div className="relative h-60">
                                        <Image
                                            src={FEATURES[0].image}
                                            alt="Google Ads"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeLeft" delay={0.6}>
                        <div className="relative rounded-3xl bg-[#191919] backdrop-blur-3xl overflow-hidden min-h-[400px]">
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <AnimationContainer animation="fadeUp" delay={0.7}>
                                    <div className="space-y-4">
                                        <h3 className="text-xl md:text-2xl font-medium">
                                            TikTok Ads
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground max-w-md">
                                            Conecta con la generación Z y Millennials a través de contenido creativo y viral que genera engagement auténtico y conversiones.
                                        </p>
                                    </div>
                                </AnimationContainer>
                                <AnimationContainer animation="fadeUp" delay={0.8}>
                                    <div className="relative h-48">
                                        <Image
                                            src={FEATURES[1].image}
                                            alt="TikTok Ads"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[.65fr_1fr] gap-6">
                    <AnimationContainer animation="fadeRight" delay={0.7}>
                        <div className="relative rounded-3xl bg-[#191919] backdrop-blur-3xl overflow-hidden min-h-[350px]">
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <AnimationContainer animation="fadeUp" delay={0.8}>
                                    <div className="space-y-4">
                                        <h3 className="text-xl md:text-2xl font-medium">
                                            Meta Ads
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground max-w-md">
                                            Llega a millones de usuarios en Facebook e Instagram con campañas personalizadas que aprovechan el poder del targeting avanzado.
                                        </p>
                                    </div>
                                </AnimationContainer>
                                <AnimationContainer animation="fadeUp" delay={0.9}>
                                    <div className="relative h-32">
                                        <Image
                                            src={FEATURES[2].image}
                                            alt="Meta Ads"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeLeft" delay={0.8}>
                        <div className="relative rounded-3xl bg-[#191919] backdrop-blur-3xl overflow-hidden min-h-[350px]">
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <AnimationContainer animation="fadeUp" delay={0.9}>
                                    <div className="space-y-4">
                                        <h3 className="text-xl md:text-2xl font-medium">
                                            Análisis & Optimización
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground max-w-md">
                                            Monitorea el rendimiento en tiempo real y optimiza continuamente tus campañas para maximizar el retorno de inversión y alcanzar tus objetivos.
                                        </p>
                                    </div>
                                </AnimationContainer>
                                <AnimationContainer animation="fadeUp" delay={1}>
                                    <div className="relative h-48">
                                        <Image
                                            src={FEATURES[3].image}
                                            alt="Analytics"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    );
};

export default Features;
