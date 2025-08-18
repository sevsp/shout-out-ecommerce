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
            href: "/catalogo#gorras",
            image: coleccionGorra,
        },
        {
            title: "Pulseras",
            subtitle: "3 estilos",
            href: "/catalogo#cadenas",
            image: coleccionPulsera,
        },
        {
            title: "Collares",
            subtitle: "3 estilos",
            href: "/catalogo#collares",
            image: coleccionCollar,
        },
        {
            title: "Medias Nike",
            subtitle: "3 variantes",
            href: "/catalogo#medias",
            image: coleccionMedia,
        },
    ];

    return (
        <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 mt-10 md:mt-14">
            <h2 className="text-2xl md:text-3xl font-regular text-slate-900 mb-8 text-center">
                Colecciones
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((it) => (
                    <a
                        key={it.title}
                        href={it.href}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition transform hover:scale-105 hover:shadow-lg block"
                    >
                        {/* Imagen cuadrada */}
                        {it.image ? (
                            <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-100">
                                <img
                                    src={it.image}
                                    alt={it.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="aspect-square w-full rounded-xl bg-slate-100" />
                        )}

                        {/* Info */}
                        <div className="mt-4 flex items-end justify-between gap-3">
                            <div>
                                <h3 className="text-slate-900 font-semibold">{it.title}</h3>
                                <p className="text-slate-500 text-sm">{it.subtitle}</p>
                            </div>
                            <span
                                className="px-3 py-1 text-sm rounded-full border border-slate-300 text-slate-700
               hover:bg-slate-900 hover:text-white transition"
                            >
                                Ver
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
