// src/components/TopBar.tsx
import LOGO from "../assets/LOGOBLANCO.png";

export default function TopBar() {
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
            <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between py-5 md:px-5">
                {/* Logo + nav (nav oculto en móvil) */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
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
                            href="/sobre"
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
                        href="https://wa.me/595991863176"
                        target="_blank"
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
            </div>
        </header>
    );
}
