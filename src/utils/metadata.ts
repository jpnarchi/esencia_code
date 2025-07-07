import { Metadata } from "next";

export const generateMetadata = ({
    title = `Esencia Code`,
    description = `Construye la página web de tus sueños hoy mismo`,
    image = "/images/banner.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/images/logo.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/images/logo.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => {
    // Construir URL absoluta para la imagen
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://esencia-code.vercel.app" || "https://esenciacode.com";
    const imageUrl = image?.startsWith('http') ? image : `${baseUrl}${image || "/images/banner.png"}`;
    
    return {
        title,
        description,
        icons,
        openGraph: {
            title: title,
            description: description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: "Esencia Code - Desarrollo Web",
                },
            ],
            locale: "es_MX",
            type: "website",
            siteName: "Esencia Code",
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [imageUrl],
            creator: "@esenciacode",
        },
        ...(noIndex && { robots: { index: false, follow: false } }),
    };
};
