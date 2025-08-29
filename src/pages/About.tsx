import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function AboutPage() {
    // Carrusel de imágenes (auto cada 5s)
    const imageSlides = useMemo(() => [about1, about2, about3], []);
    const [imgIdx, setImgIdx] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setImgIdx(i => (i + 1) % imageSlides.length), 5000);
        return () => clearInterval(id);
    }, [imageSlides.length]);

    // Slides de texto (manual)
    const textSlides = [
        {
            title: "Quiénes somos",
            content: (
                <p className="leading-relaxed text-black/70">
                    Somos una marca totalmente paraguaya, un equipo chico que selecciona accesorios con criterio: piezas versátiles y duraderas que elevan tu estilo sin complicarlo. Creemos que vestirse bien no tiene por qué ser difícil; por eso te acompañamos a elegir lo que mejor te queda, con atención directa, honesta y rápida. Cuidamos cada detalle —desde las fotos hasta la entrega— para que tu experiencia sea simple y sin vueltas, y escuchamos a nuestra comunidad para mantener un catálogo que de verdad usás.
                </p>
            ),
        },
        {
            title: "Lo que nos diferencia",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-black/70">
                    <li>Atención por WhatsApp sin vueltas.</li>
                    <li>Fotos reales de los productos del catálogo.</li>
                    <li>Selección acotada y fácil de combinar.</li>
                    <li>Comunicación clara sobre disponibilidad y tiempos.</li>
                </ul>
            ),
        },
        {
            title: "Confianza",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-black/70">
                    <li>Información clara de precios.</li>
                    <li>Opciones de envío y retiro a coordinar.</li>
                    <li>Soporte post-venta por el mismo canal donde nos contactás.</li>
                </ul>
            ),
        },
        {
            title: "Contacto / Redes",
            content: (
                <div className="space-y-3 text-black/70">
                    {/* Texto oculto para accesibilidad, podés quitarlo si no querés */}
                    <p className="sr-only">Canales de contacto y redes sociales</p>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="/contacto"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                            className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-lg border border-black/10 text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 hover:bg-black/5"
                        >
                            <FaWhatsapp size={20} />
                        </a>

                        <a
                            href="https://instagram.com/shout.outg"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                            className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-lg border border-black/10 text-slate-900 transition-colors duration-200 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <Link
                            to="/catalogo"
                            className="rounded-lg bg-black text-white px-4 py-2 text-sm hover:opacity-90"
                        >
                            Ver catálogo
                        </Link>
                    </div>
                </div>
            ),
        },
    ];

    const [txtIdx, setTxtIdx] = useState(0);
    const prevTxt = () => setTxtIdx(i => (i - 1 + textSlides.length) % textSlides.length);
    const nextTxt = () => setTxtIdx(i => (i + 1) % textSlides.length);

    useEffect(() => {
        document.title = "Sobre nosotros";
    }, []);

    return (
        // ANCHO COMPLETO, sin max-w container
        <section className="w-full py-10 px-10">
            {/* Grid a ancho completo: cada columna ocupa 50% de la pantalla en lg+ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                {/* IZQUIERDA: mitad de pantalla, full-bleed */}
                <div className="relative w-full h-[50vh] lg:h-[72vh]">
                    {imageSlides.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Sobre nosotros ${i + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === imgIdx ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    ))}
                    {/* Dots sobre la imagen */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {imageSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setImgIdx(i)}
                                aria-label={`Ir a imagen ${i + 1}`}
                                className={`h-2.5 w-2.5 rounded-full transition ${i === imgIdx ? "bg-white" : "bg-white/50 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* DERECHA: texto con padding propio (no container global) */}
                <div className="flex h-full flex-col justify-center px-6 md:px-10 lg:px-14 xl:px-20 py-6 lg:py-10">
                    <h2 className="text-3xl md:text-4xl font-semibold">{textSlides[txtIdx].title}</h2>
                    <div className="mt-4 max-w-2xl">{textSlides[txtIdx].content}</div>

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <button
                            onClick={prevTxt}
                            aria-label="Anterior"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                        >
                            <BiChevronLeft size={22} />
                        </button>

                        <button
                            onClick={nextTxt}
                            aria-label="Siguiente"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                        >
                            <BiChevronRight size={22} />
                        </button>

                        <div className="ml-2 flex gap-1.5">
                            {textSlides.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-1.5 w-6 rounded-full transition-all ${i === txtIdx ? "bg-black" : "bg-black/20"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
