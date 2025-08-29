// src/components/TopBar.tsx
import { useState } from "react";
import { PiListThin } from "react-icons/pi"; // ← icono menú
import LOGO from "../assets/LOGOBLANCO.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-200 mb-5">
            {/* Mensaje arriba */}
            <div className="w-ful text-center text-xs py-2 bg-black">
                <p>
                    <span className="font-semibold text-white">
                        🚫 Todavía no contamos con pasarela de pagos online. Todos los pedidos se gestionan exclusivamente por WhatsApp 🚫
                    </span>
                </p>
            </div>

            {/* Barra principal */}
            <div className="relative max-w-7xl mx-auto flex items-center justify-center md:justify-between py-5 md:px-5">
                {/* Botón menú móvil (no afecta el centrado del logo porque es absolute) */}
                <button
                    onClick={() => setOpen(v => !v)}
                    aria-label="Abrir menú"
                    aria-expanded={open}
                    aria-pressed={open}
                    className={`md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-40
              inline-flex h-10 w-10 items-center justify-center text-gray-900
              transition-all
              ${open
                            ? "rounded-full bg-white/90 backdrop-blur border border-black/10 shadow hover:bg-white"
                            : "bg-transparent hover:bg-transparent"}`
                    }
                >
                    <PiListThin size={22} />
                </button>

                {/* Logo + nav (nav oculto en móvil) */}
                <div className="flex items-center gap-6">
                    <a href="/" className="flex items-center">
                        <img
                            src={LOGO}
                            alt="Shout Out"
                            className="h-7 w-auto md:h-7 transition-transform duration-200 hover:scale-110"
                        />
                    </a>

                    {/* Navegación (solo >= md) */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-normal pt-4">
                        <a
                            href="/catalogo"
                            className="text-gray-600 hover:text-black transition-transform hover:scale-110"
                        >
                            Catálogo
                        </a>
                        <a
                            href="/sobre-nosotros"
                            className="text-gray-600 hover:text-black transition-transform hover:scale-110"
                        >
                            Sobre Nosotros
                        </a>
                        <a
                            href="/contacto"
                            className="text-gray-600 hover:text-black transition-transform hover:scale-110"
                        >
                            Contacto
                        </a>
                    </nav>
                </div>

                {/* Iconos derecha (solo >= md) */}
                <div className="hidden md:flex items-center gap-5 text-sm font-normal">
                    <a
                        href="/contacto"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-transform hover:scale-110"
                        aria-label="WhatsApp"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                    </a>
                    <a
                        href="https://instagram.com/shout.outg"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-pink-600 transition-transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <i className="fa-brands fa-instagram text-lg"></i>
                    </a>
                </div>

                {/* Panel móvil */}
                {open && (
                    <>
                        {/* backdrop para cerrar tocando fuera */}
                        <button
                            className="md:hidden fixed inset-0 z-30 bg-black/10"
                            aria-hidden
                            onClick={() => setOpen(false)}
                        />
                        <div className="md:hidden absolute left-4 top-full mt-2 z-40 rounded-xl bg-white/95 backdrop-blur border border-black/10 shadow-lg p-2">
                            <a
                                href="/catalogo"
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-4 py-2 text-sm hover:bg-black/5"
                            >
                                Catálogo
                            </a>
                            <a
                                href="/sobre-nosotros"
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-4 py-2 text-sm hover:bg-black/5"
                            >
                                Sobre nosotros
                            </a>
                            <a
                                href="/contacto"
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-4 py-2 text-sm hover:bg-black/5"
                            >
                                Contacto
                            </a>
                            <div className="mt-2 border-t border-black/10 pt-2">
                                <div className="flex items-center justify-center gap-3 px-1">
                                    <a
                                        href="/contacto"
                                        rel="noreferrer"
                                        aria-label="WhatsApp"
                                        className="text-black hover:opacity-70"
                                        onClick={() => setOpen(false)}
                                    >
                                        <FaWhatsapp size={20} />
                                    </a>
                                    <a
                                        href="https://instagram.com/shout.outg"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Instagram"
                                        className="text-black hover:opacity-70"
                                        onClick={() => setOpen(false)}
                                    >
                                        <FaInstagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
