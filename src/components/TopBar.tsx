export default function TopBar() {
    return (
        <header className="w-full bg-white">
            {/* Mensaje arriba */}
            <div className="w-full border-b border-gray-200 text-center text-xs py-2">
                <p>
                    🚫 No contamos con pasarela de pagos online.{" "}
                    <span className="font-semibold">
                        Todos los pedidos se gestionan exclusivamente por WhatsApp 🚫
                    </span>
                </p>
            </div>

            {/* Barra principal */}
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
                {/* Izquierda */}
                <div className="flex items-center gap-6">
                    <span className="text-lg font-bold text-black">Shout Out</span>
                    <nav className="flex items-center gap-6 text-sm font-normal">
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

                {/* Derecha */}
                <div className="flex items-center gap-5 text-sm font-normal">
                    <a
                        href="https://wa.me/595991863176"
                        target="_blank"
                        className="text-gray-600 hover:text-green-600 transition-transform hover:scale-110"
                        aria-label="WhatsApp"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                    </a>
                    <a
                        href="https://instagram.com/tuusuario"
                        target="_blank"
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
