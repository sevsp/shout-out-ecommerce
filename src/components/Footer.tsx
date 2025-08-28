// src/components/Footer.tsx
import LOGO from "../assets/LOGO.png";

export default function Footer() {
    return (
        <footer className="relative w-full bg-black text-white md:mt-20">
            {/* Contenido superior */}
            <div className="relative max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12">
                {/* Móvil: columna; Desktop: grid con 3 columnas */}
                <div className="flex flex-col gap-8 text-sm leading-relaxed md:grid md:grid-cols-4 md:items-start md:gap-12 lg:gap-30">
                    {/* Marca + claim */}
                    <div className="md:max-w-sm">
                        <p className="uppercase text-[10px] tracking-widest text-white/60">
                            APERTURA POR SHOUT OUT
                        </p>
                        <p className="mt-3 text-white/80">
                            Creamos identidades de marca y diseños únicos y poderosos que te
                            diferencian de la competencia.
                        </p>
                        <a
                            href="mailto:sharau701@gmail.com"
                            className="mt-4 inline-block text-white/80 hover:text-white underline underline-offset-4"
                        >
                            sharau701@gmail.com
                        </a>
                    </div>

                    {/* Contacto */}
                    <div>
                        <p className="uppercase text-[10px] tracking-widest text-white/60">
                            Contacto
                        </p>
                        <ul className="mt-3 space-y-1">
                            <li>
                                <a href="#" className="hover:text-white/100 text-white/80">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white/100 text-white/80">
                                    Tiktok
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Navegación (lo regreso para equilibrar el grid) */}
                    <div>
                        <p className="uppercase text-[10px] tracking-widest text-white/60">
                            Navegación
                        </p>
                        <ul className="mt-3 space-y-1">
                            <li>
                                <a href="/sobre" className="hover:text-white/100 text-white/80">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="/catalogo" className="hover:text-white/100 text-white/80">
                                    Catálogo
                                </a>
                            </li>
                            <li>
                                <a href="/contacto" className="hover:text-white/100 text-white/80">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / utilidades */}
                    <div className="flex flex-col gap-2 md:items-end">
                        <p className="text-white/50">© 2025 Shout Out. All rights reserved.</p>
                        <div className="flex items-center gap-5 text-white/70">
                            <a href="#top" className="hover:text-white">
                                Back to top
                            </a>
                            <a href="#made" className="hover:text-white">
                                Made by Sebastián Mendieta
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo en la parte inferior */}
            <div className="relative flex justify-center items-center pb-6 md:pt-10 md:pb-20">
                <img
                    src={LOGO}
                    alt="Shout Out Logo"
                    className="h-[120px] md:h-[180px] lg:h-[100px] w-auto object-contain"
                />
            </div>
        </footer>
    );
}
