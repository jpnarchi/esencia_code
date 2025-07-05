import { Metadata } from "next";

export const generateMetadata = ({
    title = `Esencia Code`,
    description = `Construye la página web de tus sueños hoy mismo`,
    image = "/images/banner.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/images/esencia-logo.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/images/esencia-logo.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        url: 'https://esenciacode.mx',
        siteName: 'Esencia Code',
        images: [
            {
                url: `https://esenciacode.mx/${image}`,
                width: 1200,
                height: 630,
                alt: 'Esencia Code - Desarrollo Web',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`https://esenciacode.mx/${image}`],
        creator: '@esenciacode',
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
});
