import LOGO from "../assets/LOGO.png";

export default function Footer() {
    return (
        <footer className="relative w-full bg-black text-white mt-20">
            {/* Contenido superior */}
            <div className="relative max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm leading-relaxed">
                    {/* Marca + claim */}
                    <div>
                        <p className="uppercase text-[10px] tracking-widest text-white/60">
                            APERTURA POR SHOUT OUT
                        </p>
                        <p className="mt-3 max-w-xs text-white/80">
                            Creamos identidades de marca y diseños únicos y poderosos que te diferencian de la competencia.
                        </p>
                        <a
                            href="mailto:business@shoutout.com"
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
                            <li><a href="#" className="hover:text-white/100 text-white/80">Instagram</a></li>
                            <li><a href="#" className="hover:text-white/100 text-white/80">Tiktok</a></li>
                        </ul>
                    </div>

                    {/* Navegación */}
                    <div>
                        <p className="uppercase text-[10px] tracking-widest text-white/60">
                            Navegación
                        </p>
                        <ul className="mt-3 space-y-1">
                            <li><a href="#about" className="hover:text-white/100 text-white/80">Sobre Nosotros</a></li>
                            <li><a href="#services" className="hover:text-white/100 text-white/80">Catálogo</a></li>
                            <li><a href="#contact" className="hover:text-white/100 text-white/80">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Legal / utilidades */}
                    <div className="flex flex-col items-start lg:items-end gap-2">
                        <p className="text-white/50">© All rights reserved 2025</p>
                        <div className="flex items-center gap-5 text-white/70">
                            <a href="#top" className="hover:text-white">Back to top</a>
                            <a href="#made" className="hover:text-white">Made by Sebastián Mendieta</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo en la parte inferior */}
            <div className="relative flex justify-center items-center py-6 md:py-8">
                <img
                    src={LOGO}
                    alt="Shout Out Logo"
                    className="h-[180px] md:h-[240px] lg:h-[100px] w-auto object-contain"
                />
            </div>
        </footer>
    );
}
