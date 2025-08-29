// src/data/products.ts
import type { Product } from "../types/Products";

export const PRODUCTS: Product[] = [
    // Cadenas
    {
        id: "cadena-serpiente-plateada",
        slug: "cadena-serpiente-plateada",
        name: "Cadena Serpiente Plateada",
        category: "Cadenas",
        priceGs: 70000,
        images: ["1.jpg"],
        description:
            "Cadena estilo serpiente en acero inoxidable. Largo 50 cm. Cierre tipo langosta.",
        active: true,
    },
    {
        id: "cadena-simple-oro",
        slug: "cadena-simple-oro",
        name: "Cadena Simple Oro",
        category: "Cadenas",
        priceGs: 70000,
        images: ["1.jpg"],
        description:
            "Cadena minimalista de látigo de oro. Largo 50 cm. Cierre tipo langosta.",
        active: true,
    },
    {
        id: "cadena-trenzada-plateada",
        slug: "cadena-trenzada-plateada",
        name: "Cadena Trenzada Plateada",
        category: "Cadenas",
        priceGs: 70000,
        images: ["1.jpg"],
        description:
            "Cadena trenzada (rope) en acero inoxidable. Largo 55 cm. Cierre tipo langosta.",
        active: true,
    },

    // Pulseras
    {
        id: "pulsera-punk-roja",
        slug: "pulsera-punk-roja",
        name: "Pulsera Punk Roja",
        category: "Pulseras",
        priceGs: 60000,
        images: ["1.jpg"],
        description:
            "Pulsera estilo punk color rojo y plateado. Largo 21 cm. Cierre tipo langosta.",
        active: true,
    },
    {
        id: "pulsera-simple-plateada",
        slug: "pulsera-simple-plateada",
        name: "Pulsera Simple Plateada",
        category: "Pulseras",
        priceGs: 50000,
        images: ["1.jpg"],
        description:
            "Pulsera minimal en acero inoxidable color plateado. Largo 21 cm. Cierre tipo langosta.",
        active: true,
    },
    {
        id: "pulsera-trenzada-plateada",
        slug: "pulsera-trenzada-plateada",
        name: "Pulsera Trenzada Plateada",
        category: "Pulseras",
        priceGs: 55000,
        images: ["1.jpg"],
        description:
            "Pulsera trenzada en acero inoxidable 316L. Largo 19 cm. Cierre tipo langosta.",
        active: true,
    },

    // Medias
    {
        id: "media-nike-blanca",
        slug: "media-nike-blanca",
        name: "Medias Nike Blancas",
        category: "Medias",
        priceGs: 25000,
        images: ["1.jpg"],
        description:
            "Medias Nike blancas de caña media. Invisible, absorbe el sudor y antifricción.",
        active: true,
    },
    {
        id: "media-nike-negra",
        slug: "media-nike-negra",
        name: "Medias Nike Negras",
        category: "Medias",
        priceGs: 25000,
        images: ["1.jpg"],
        description:
            "Medias Nike negras de caña media. Invisible, absorbe el sudor y antifricción.",
        active: true,
    },
    {
        id: "media-nike-blanca-vintage",
        slug: "media-nike-blanca-vintage",
        name: "Medias Nike Blancas Vintage",
        category: "Medias",
        priceGs: 35000,
        images: ["1.jpg"],
        description:
            "Medias Nike estilo vintage en color blanco. Caña media. 3 diseños únicos",
        active: true,
    },

    // Gorras (cada una producto distinto)
    {
        id: "gorra-angel-azul",
        slug: "gorra-angel-azul",
        name: "Gorra City of Angels NZMU",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra tipo baseball con bordado de ángel en azul. Visera recta, talle único (7-1/2).",
        active: true,
    },
    {
        id: "gorra-angel-negra",
        slug: "gorra-angel-negra",
        name: "Gorra City of Angels NZMU",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra tipo baseball con bordado de ángel en negro. Visera recta, talle único (7-1/2).",
        active: true,
    },
    {
        id: "gorra-basica-negra-diseño1",
        slug: "gorra-basica-negra-diseño1",
        name: "Gorra New York Yankees",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra New Era 59FIFTY New York Yankees MLB negra. Visera recta, talle único (7-1/4).",
        active: true,
    },
    {
        id: "gorra-basica-negra-diseño2",
        slug: "gorra-basica-negra-diseño2",
        name: "Gorra Detroit Tigers",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra New Era 59FIFTY Detroit Tigers MLB negra. Visera recta, talle único (7-3/8).",
        active: true,
    },
    {
        id: "gorra-basica-negra-diseño3",
        slug: "gorra-basica-negra-diseño3",
        name: "Gorra New York Yankees",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra New Era 59FIFTY New York Yankees MLB negra. Visera recta, talle único (7-1/4).",
        active: true,
    },
    {
        id: "gorra-basica-roja",
        slug: "gorra-basica-roja",
        name: "Gorra Los Angeles Dodgers",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra New Era 59FIFTY New York Yankees MLB roja. Visera recta, talle único (7-3/8).",
        active: true,
    },
    {
        id: "gorra-bordado-negro",
        slug: "gorra-bordado-negro",
        name: "Gorra All Over Total Black",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra New Era 59FIFTY All Over MLB negra. Visera recta, talle único (7-1/4).",
        active: true,
    },
    {
        id: "gorra-bornraised-azul",
        slug: "gorra-bornraised-azul",
        name: "Gorra Los Angeles Dodgers Born & Raised",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra New Era Los Angeles Dodgers Born & Raised en azul. Visera recta, talle único (7-3/8).",
        active: true,
    },
    {
        id: "gorra-bornraised-negra",
        slug: "gorra-bornraised-negra",
        name: "Gorra Los Angeles Dodgers Born & Raised",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra New Era Los Angeles Dodgers Born & Raised en negro. Visera recta, talle único (7-1/2).",
        active: true,
    },
    {
        id: "gorra-worldschampions-azulmarino",
        slug: "gorra-worldschampions-azulmarino",
        name: "Gorra Worlds Champions Azul Marino",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra de Atlanta Braves MLB Historic Champs 59FIFTY en azul marino. Visera recta, talle único (7-3/8).",
        active: true,
    },
    {
        id: "gorra-worldschampions-verde",
        slug: "gorra-worldschampions-verde",
        name: "Gorra Worlds Champions Verde",
        category: "Gorras",
        priceGs: 80000,
        images: ["1.jpg"],
        description:
            "Gorra Oakland Athletics MLB Historic Champs 59FIFTY en verde. Visera recta, talle único (7-1/4).",
        active: true,
    },
];
