import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import home1 from "../assets/HOME.png";
import home2 from "../assets/HOME2.jpg";
import home3 from "../assets/HOME3.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SLIDES = [home1, home2, home3];

export default function Hero() {
    const [idx, setIdx] = useState(0);
    const timerRef = useRef<number | null>(null);

    const next = () => setIdx((p) => (p + 1) % SLIDES.length);
    const prev = () => setIdx((p) => (p - 1 + SLIDES.length) % SLIDES.length);

    // Auto-slide cada 5s
    useEffect(() => {
        if (timerRef.current) window.clearInterval(timerRef.current);
        if (SLIDES.length <= 1) return;
        timerRef.current = window.setInterval(next, 5000);
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [idx]);

    return (
        <section className="relative w-full overflow-hidden border-b border-gray-200 pb-2">
            <div className="relative max-w-screen-xl mx-auto rounded-2xl overflow-hidden bg-[#EDEDED]">
                <div
                    className="flex h-[600px] sm:h-[460px] md:h-[600px] transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${idx * 100}%)` }}
                >
                    {SLIDES.map((src, i) => (
                        <div key={i} className="relative min-w-full h-full">
                            {/* Imagen */}
                            <img
                                src={src}
                                alt={`Hero ${i + 1}`}
                                className={`w-full h-full object-cover select-none ${i === 0 ? "object-[30%]" : "object-center"
                                    }`}
                                draggable={false}
                            />

                            {i === 0 && (
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                    <div className="ml-[400px] text-left">
                                        {/* Shout Out arriba */}
                                        <span className="uppercase tracking-widest text-sm md:text-base text-black block mb-2 text-center">
                                            Shout Out
                                        </span>

                                        {/* Essentials centrado */}
                                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black">
                                            Essentials
                                        </h1>

                                        {/* Botón debajo */}
                                        <div className="mt-6 flex justify-center">
                                            <a
                                                href="/catalogo"
                                                className="inline-block bg-black text-white px-5 py-3 text-sm md:text-base 
            rounded-lg pointer-events-auto 
            transform transition hover:scale-105 hover:opacity-90"
                                            >
                                                Ver catálogo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {i === 1 && (
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-start">
                                    <div className="ml-[100px] text-left">
                                        {/* Texto */}
                                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
                                            Elegancia en <br /> cada detalle
                                        </h1>

                                        {/* Botón alineado al inicio */}
                                        <div className="mt-4">
                                            <a
                                                href="/catalogo"
                                                className="inline-block bg-white text-black px-5 py-3 text-sm md:text-base 
            rounded-lg pointer-events-auto 
            transform transition hover:scale-105"
                                            >
                                                Ver catálogo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}


                            {/* Overlay de texto para la tercera imagen */}
                            {idx === 2 && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center text-white px-4">
                                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                                            <span className="italic">"Ore ñemotenonde, nde reheve"</span>
                                        </h1>

                                        {/* Subtítulo */}
                                        <p className="mt-3 text-lg md:text-xl font-regular drop-shadow-lg">
                                            Shout Out
                                        </p>

                                        {/* Botones */}
                                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">

                                            {/* WhatsApp */}
                                            <a
                                                href="https://wa.me/595XXXXXXXXX"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 transform transition hover:scale-105 hover:bg-white/20"
                                            >
                                                <FaWhatsapp className="text-green-400 text-3xl" />
                                                <span className="font-regular">¿Tenés dudas? Escribinos por WhatsApp</span>
                                            </a>

                                            {/* Instagram */}
                                            <a
                                                href="https://instagram.com/tuusuario"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 transform transition hover:scale-105 hover:bg-white/20"
                                            >
                                                <FaInstagram className="text-pink-400 text-3xl" />
                                                <span className="font-regular">Mirá lo nuevo en Instagram</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                    ))}
                </div>
            </div>

            {/* Controles */}
            {SLIDES.length > 1 && (
                <div className="max-w-screen-xl mx-auto mt-3 flex items-center justify-center gap-4">
                    <button
                        onClick={prev}
                        aria-label="Anterior"
                        className="text-black text-2xl hover:scale-110 transition-transform"
                    >
                        <BiChevronLeft />
                    </button>

                    <div className="flex items-center gap-2">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Ir a la imagen ${i + 1}`}
                                onClick={() => setIdx(i)}
                                className={`h-2.5 w-2.5 rounded-full transition ${i === idx
                                    ? "bg-black border border-black"
                                    : "bg-white border border-black"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        aria-label="Siguiente"
                        className="text-black text-2xl hover:scale-110 transition-transform"
                    >
                        <BiChevronRight />
                    </button>
                </div>
            )}
        </section>
    );
}
