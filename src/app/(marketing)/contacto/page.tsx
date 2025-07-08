"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionBadge from "@/components/ui/section-badge";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus("idle");

        try {
            const result = await emailjs.send(
                "service_c61wc7u", // Reemplaza con tu Service ID
                "template_6talg0x", // Reemplaza con tu Template ID
                {
                    from_name: formData.nombre,
                    from_email: formData.email,
                    from_phone: formData.telefono,
                    from_company: formData.empresa,
                    message: formData.mensaje,
                    to_email: "esenciacodecode@gmail.com",
                },
                "G2IipeEQzUeUYRXL1" // Reemplaza con tu Public Key
            );

            if (result.status === 200) {
                setSubmitStatus("success");
                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    empresa: "",
                    mensaje: "",
                });
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Wrapper className="flex items-center justify-center min-h-screen w-full h-full pt-16">
            <div className="flex flex-col lg:flex-row w-full h-full lg:gap-16">
                {/* Columna de información */}
                <div className="flex flex-col items-start gap-10 py-8 w-full lg:w-1/2">
                    <div className="flex flex-col items-start gap-4">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="Ponte en contacto" />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <h1 className="text-5xl lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-neutral-500">
                                Hablemos sobre tu proyecto
                            </h1>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                                Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad con la tecnología más avanzada.
                            </p>
                        </AnimationContainer>
                    </div>

                    <AnimationContainer animation="fadeUp" delay={0.8}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-medium">Información de contacto</h3>
                                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                    <p>esencia@esenciacode.com</p>
                                    <p> +52 (55) 6136 5494</p>
                                    <p> Ciudad de México, México</p>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>

                {/* Columna del formulario */}
                <AnimationContainer animation="fadeRight" delay={0.4} className="w-full lg:w-1/2">
                    <div className="flex flex-col items-start justify-start w-full h-full relative">
                        <div className="w-full h-full flex items-center pb-8 lg:pb-0">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-none min-w-0">
                                {/* Nombre completo - ancho completo */}
                                <div className="flex flex-col gap-2 w-full">
                                    <Label htmlFor="nombre">Nombre completo</Label>
                                    <Input
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder="Tu nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full min-w-0 flex-1"
                                    />
                                </div>

                                {/* Email - ancho completo */}
                                <div className="flex flex-col gap-2 w-full">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full min-w-0 flex-1"
                                    />
                                </div>

                                {/* Teléfono y Empresa en la misma fila solo en pantallas grandes */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                                    <div className="flex flex-col gap-2 min-w-0">
                                        <Label htmlFor="telefono">Teléfono</Label>
                                        <Input
                                            id="telefono"
                                            name="telefono"
                                            type="tel"
                                            placeholder="+1 (555) 123-4567"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            className="w-full min-w-0 flex-1"
                                        />
                                    </div>
                                    
                                    <div className="flex flex-col gap-2 min-w-0">
                                        <Label htmlFor="empresa">Empresa</Label>
                                        <Input
                                            id="empresa"
                                            name="empresa"
                                            type="text"
                                            placeholder="Nombre de tu empresa"
                                            value={formData.empresa}
                                            onChange={handleInputChange}
                                            className="w-full min-w-0 flex-1"
                                        />
                                    </div>
                                </div>

                                {/* Mensaje - ancho completo */}
                                <div className="flex flex-col gap-2 w-full">
                                    <Label htmlFor="mensaje">Mensaje</Label>
                                    <Textarea
                                        id="mensaje"
                                        name="mensaje"
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                        value={formData.mensaje}
                                        onChange={handleInputChange}
                                        rows={5}
                                        required
                                        className="w-full min-w-0 flex-1 resize-none"
                                    />
                                </div>

                                {/* Mensajes de estado */}
                                {submitStatus === "success" && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                                        <p className="text-green-800 text-sm">
                                            ¡Mensaje enviado con éxito! Te contactaremos pronto.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                                        <p className="text-red-800 text-sm">
                                            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                                        </p>
                                    </div>
                                )}

                                <Button 
                                    type="submit" 
                                    size="md" 
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Enviando..." : "Enviar mensaje"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
            
            {/* Gradiente de fondo similar al Hero */}
            <AnimationContainer animation="scaleUp" delay={1.2} className="absolute w-2/3 h-auto -top-[8%] left-1/4 -z-10">
                <div className="w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default ContactPage;