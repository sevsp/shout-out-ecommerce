import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import home1 from "../assets/HOME.png";
import home2 from "../assets/HOME2.jpg";
// import home3 from "../assets/HOME3.jpg";

const SLIDES = [home1, home2];

export default function Hero() {
    const [idx, setIdx] = useState(0);
    const timerRef = useRef<number | null>(null);

    const next = () => setIdx((p) => (p + 1) % SLIDES.length);
    const prev = () => setIdx((p) => (p - 1 + SLIDES.length) % SLIDES.length);

    const startXRef = useRef<number | null>(null);
    const touchIdRef = useRef<number | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        const t = e.changedTouches[0];
        startXRef.current = t.clientX;
        touchIdRef.current = t.identifier;
        if (timerRef.current) window.clearInterval(timerRef.current); // pausar autoplay mientras swypeas
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const t =
            Array.from(e.changedTouches).find(tt => tt.identifier === touchIdRef.current) ??
            e.changedTouches[0];

        const startX = startXRef.current;
        startXRef.current = null;
        touchIdRef.current = null;
        if (startX == null) return;

        const dx = t.clientX - startX;
        const THRESHOLD = 40; // px para considerar swipe
        if (dx <= -THRESHOLD) next();
        else if (dx >= THRESHOLD) prev();

        // reanudar autoplay
        if (SLIDES.length > 1) {
            timerRef.current = window.setInterval(next, 5000);
        }
    };

    useEffect(() => {
        if (timerRef.current) window.clearInterval(timerRef.current);
        if (SLIDES.length <= 1) return;
        timerRef.current = window.setInterval(next, 5000);
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [idx]);

    return (
        <section className="relative w-full overflow-hidden pb-2">
            <div className="relative max-w-screen-xl mx-auto px-4 md:px-5 lg:px-0">
                <div className="relative rounded-lg overflow-hidden bg-[#EDEDED]">
                    <div
                        className="flex h-[600px] sm:h-[460px] md:h-[600px] transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${idx * 100}%)` }}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >

                        {SLIDES.map((src, i) => (
                            <div key={i} className="relative min-w-full h-full bg-[#F8F8F7]">
                                <img
                                    src={src}
                                    alt={`Hero ${i + 1}`}
                                    className={`w-full h-full select-none ${i === 0
                                        ? // 📱 En móvil: subimos y ajustamos el eje X
                                        "object-cover object-[26%_20%] translate-y-[-80px] md:object-[30%] md:translate-y-0"
                                        : // 💻 En desktop (resto de slides normales)
                                        "object-cover object-center"
                                        }`}
                                    draggable={false}
                                />

                                {/* === Overlay específico por slide === */}
                                {i === 0 && (
                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        {/* Solo en móvil */}
                                        <div className="md:hidden relative w-full h-full">
                                            {/* Textos y botón */}
                                            <div className="absolute top-[400px] left-1/2 -translate-x-1/2 text-center">
                                                <span className="uppercase tracking-widest text-sm text-black block mb-2">
                                                    Shout Out
                                                </span>

                                                <h1 className="text-4xl font-extrabold tracking-tight text-black mb-4">
                                                    Essentials
                                                </h1>

                                                <a
                                                    href="/catalogo"
                                                    className="inline-block bg-black text-white px-5 py-3 text-sm 
                                                            rounded-lg pointer-events-auto 
                                                            transform transition hover:scale-105 hover:opacity-90"
                                                >
                                                    Ver catálogo
                                                </a>
                                            </div>
                                        </div>

                                        {/* Versión escritorio/tablet (mantiene tu diseño original) */}
                                        <div className="hidden md:block ml-[400px] text-left">
                                            <span className="uppercase tracking-widest text-base text-black block mb-2">
                                                Shout Out
                                            </span>

                                            <h1 className="text-7xl font-extrabold tracking-tight text-black">
                                                Essentials
                                            </h1>

                                            <div className="mt-6">
                                                <a
                                                    href="/catalogo"
                                                    className="inline-block bg-black text-white px-5 py-3 text-base 
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
                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center md:justify-start">
                                        <div className="text-center md:text-left px-4 md:ml-[100px]">
                                            <span className="uppercase tracking-widest text-base text-white block mb-2">
                                                Shout Out
                                            </span>
                                            <h1
                                                className="
                                                        text-4xl 
                                                        md:text-6xl 
                                                        font-extrabold 
                                                        tracking-tight 
                                                        text-white 
                                                        drop-shadow-md
                                                        "
                                            >
                                                Elegancia en cada detalle
                                            </h1>

                                            <div className="mt-4 flex justify-center md:justify-start">
                                                <a
                                                    href="/catalogo"
                                                    className="inline-block bg-white text-black mt-5 px-5 py-3 text-sm md:text-base rounded-lg pointer-events-auto transform transition hover:scale-105"
                                                >
                                                    Ver catálogo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}


                                {/* {i === 2 && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div
                                            className="pointer-events-auto text-center text-white px-6 py-8 max-w-[90%] md:max-w-2xl"
                                        >
                                            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                                                <span className="italic">"Tienda totalmente Paraguaya"</span>
                                            </h1>
                                        </div>
                                    </div>
                                )} */}


                            </div>
                        ))}
                    </div>
                </div>

                {SLIDES.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Anterior"
                            className="absolute left-[-50px] top-1/2 -translate-y-1/2 
                                    text-black text-3xl hover:scale-110 transition-transform"
                        >
                            <BiChevronLeft />
                        </button>

                        <button
                            onClick={next}
                            aria-label="Siguiente"
                            className="absolute right-[-50px] top-1/2 -translate-y-1/2 
                                    text-black text-3xl hover:scale-110 transition-transform"
                        >
                            <BiChevronRight />
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}
