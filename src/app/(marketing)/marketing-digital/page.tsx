"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";

const MarketingDigitalPage = () => {
  return (
    <div className="w-full relative flex flex-col">
      <section className="w-full">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-neutral-500">
              Creamos el <Cover className="">futuro</Cover> de tu empresa
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-4 max-w-2xl">
              Crea tu página web o aplicación con la tecnología más avanzada de latinoamérica.
            </p>
          </div>
        </BackgroundBeamsWithCollision>
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