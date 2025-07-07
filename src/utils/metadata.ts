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
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title: "Esencia Code",
        description: "Construye la página web de tus sueños hoy mismo",
        images: [
            {
                url: image || "/images/banner.png",
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
        title: "Esencia Code",
        description: "Construye la página web de tus sueños hoy mismo",
        images: [image || "/images/banner.png"],
        creator: "@esenciacode",
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
});
