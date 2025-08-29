// src/pages/Contact.tsx
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import perfil1 from "../assets/perfil1.jpg";
import perfil2 from "../assets/perfil2.jpg";

type Contact = {
    label: string;
    phone: string;
    avatarUrl?: string;
};

const CONTACTS: Contact[] = [
    { label: "Sebastián Mendieta", phone: "595991863176", avatarUrl: perfil1 },
    { label: "Sebastián Struway", phone: "59597316147", avatarUrl: perfil2 }, // poné aquí el número real
];

const buildWA = (phone: string, text = "Hola! Quiero hacer una consulta") =>
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

function Avatar({ name, src }: { name: string; src?: string }) {
    const initials = name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(w => w[0]!.toUpperCase())
        .join("");

    return (
        <div
            className="h-16 w-16 aspect-square shrink-0 rounded-full overflow-hidden
                 border border-black/10 bg-black/10 flex items-center justify-center
                 text-base font-semibold text-black/70"
        >
            {src ? (
                <img
                    src={src}
                    alt={name}
                    className="block h-full w-full object-cover"
                />
            ) : (
                initials
            )}
        </div>
    );
}

export default function ContactPage() {
    useEffect(() => {
        document.title = "Contacto";
    }, []);

    return (
        <section className="min-h-[82vh] flex items-center">
            <div className="w-full px-4">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold text-center mb-8">
                        Elegí con quién chatear
                    </h1>

                    <div className="space-y-4">
                        {CONTACTS.map((c) => (
                            <a
                                key={c.label}
                                href={buildWA(c.phone)}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80
                           px-5 md:px-6 py-4 md:py-5 hover:bg-black/[0.04] shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Avatar name={c.label} src={c.avatarUrl} />
                                    <span className="font-medium text-[15px] md:text-base leading-tight">
                                        {c.label}
                                    </span>
                                </div>

                                <span className="inline-flex items-center gap-2 text-[#25D366] text-[15px] md:text-base">
                                    <FaWhatsapp size={18} />
                                    +{c.phone}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
