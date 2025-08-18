// src/components/TopBar.tsx
import LOGO from "../assets/LOGOBLANCO.png";

export default function TopBar() {
    return (
        <header className="w-full bg-white">
            {/* Mensaje arriba */}
            <div className="w-full border-b border-gray-200 text-center text-xs py-2">
                <p>
                    <span className="font-semibold">
                        🚫 Todavía no contamos con pasarela de pagos online. Todos los pedidos se gestionan exclusivamente por WhatsApp 🚫
                    </span>
                </p>
            </div>

            {/* Barra principal */}
            <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-between px-4 py-5">
                {/* Logo + nav (nav oculto en móvil) */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src={LOGO}
                            alt="Shout Out"
                            className="h-10 w-auto md:h-10" /* puedes ajustar el tamaño si quieres */
                        />
                    </a>

                    {/* Navegación (solo >= md) */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-normal">
                        <a
                            href="/catalogo"
                            className="text-gray-600 hover:text-black hover:underline underline-offset-4 decoration-1 transition-colors"
                        >
                            Catálogo
                        </a>
                        <a
                            href="/sobre"
                            className="text-gray-600 hover:text-black hover:underline underline-offset-4 decoration-1 transition-colors"
                        >
                            Sobre Nosotros
                        </a>
                        <a
                            href="/contacto"
                            className="text-gray-600 hover:text-black hover:underline underline-offset-4 decoration-1 transition-colors"
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
                        href="https://instagram.com/tuusuario"
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
