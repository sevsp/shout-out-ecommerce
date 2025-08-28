// src/components/Collections.tsx
import coleccionGorra from "../assets/coleccionGorra.jpg";
import coleccionCollar from "../assets/coleccionCollar.jpg";
import coleccionPulsera from "../assets/coleccionPulsera.jpg";
import coleccionMedia from "../assets/coleccionMedia.jpg";

export default function Collections() {
    const items = [
        {
            title: "Gorras",
            subtitle: "11 modelos",
            desc:
                "Béisbol y streetwear: clásicos y ediciones especiales para combinar con todo.",
            href: "/catalogo#gorras",
            image: coleccionGorra,
        },
        {
            title: "Pulseras",
            subtitle: "3 estilos",
            desc:
                "Acero y acabados premium en diseños minimalistas y apilables.",
            href: "/catalogo#cadenas",
            image: coleccionPulsera,
        },
        {
            title: "Collares",
            subtitle: "3 estilos",
            desc:
                "Cadenas y collares esenciales para elevar cualquier outfit.",
            href: "/catalogo#collares",
            image: coleccionCollar,
        },
        {
            title: "Medias Nike",
            subtitle: "3 variantes",
            desc:
                "Blancas, negras y vintage. Confort y estilo para el día a día.",
            href: "/catalogo#medias",
            image: coleccionMedia,
        },
    ];

    return (
        <section className="max-w-screen-xl mx-auto px-4 sm:px-0 mt-5 md:mt-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mx-5 lg:mx-0">
                {items.map((it) => (
                    <a key={it.title} href={it.href} className="group block">
                        {/* Imagen con la proporción deseada */}
                        <div
                            className="rounded-xl overflow-hidden bg-slate-100 transition-transform duration-300 group-hover:scale-105"
                        >
                            <img
                                src={it.image}
                                alt={it.title}
                                className="w-full aspect-[325/417] object-cover"
                            />
                        </div>

                        {/* Texto debajo */}
                        <div className="mt-2 mb-8">
                            <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                                {it.title}
                            </h3>
                            <p className="text-slate-500 text-sm">{it.subtitle}</p>
                            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                {it.desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
