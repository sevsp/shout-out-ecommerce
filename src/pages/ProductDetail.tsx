// src/pages/ProductDetail.tsx
import { useMemo, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import type { Product } from "../types/Products";
import { formatGs } from "../utils/currency";

export default function ProductDetail() {
    const { slug = "" } = useParams();
    const navigate = useNavigate();

    const product: Product | undefined = useMemo(
        () => PRODUCTS.find(p => p.slug === slug),
        [slug]
    );

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [slug]);

    const [idx, setIdx] = useState(0);

    const imgUrl = (i: number) =>
        product
            ? `/products/${encodeURIComponent(product.slug)}/${encodeURIComponent(product.images[i])}`
            : "";

    const recs = useMemo(() => {
        if (!product) return [];
        return PRODUCTS
            .filter(p => p.active !== false && p.slug !== product.slug && p.category === product.category)
            .slice(0, 3);
    }, [product]);

    if (!product) {
        return (
            <section className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-10">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-black/5"
                >
                    ← Volver
                </button>
                <div className="text-xl">Producto no encontrado.</div>
            </section>
        );
    }

    const whatsHref = `https://wa.me/?text=${encodeURIComponent(
        `Hola! Quiero pedir ${product.name} (${product.id}) por ${formatGs(product.priceGs)}`
    )}`;

    return (
        <section className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-8">
            <Link
                to="/catalogo"
                className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-black/5"
            >
                Volver al catálogo
            </Link>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Izquierda: imagen + miniaturas */}
                <div className="space-y-3">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 bg-white">
                        {product.images?.length ? (
                            <img
                                key={idx}
                                src={imgUrl(idx)}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                loading="eager"
                                decoding="async"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-black/40">
                                Sin imagen
                            </div>
                        )}
                    </div>

                    {product.images && product.images.length > 1 && (
                        <div className="grid grid-cols-5 md:grid-cols-6 gap-2">
                            {product.images.map((img, i) => (
                                <button
                                    key={img + i}
                                    onClick={() => setIdx(i)}
                                    className={`aspect-square rounded-lg overflow-hidden border ${i === idx ? "ring-2 ring-black" : "border-black/10"
                                        }`}
                                    title={`Ver imagen ${i + 1}`}
                                >
                                    <img
                                        src={imgUrl(i)}
                                        alt={`${product.name} ${i + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Derecha: info */}
                <div>
                    <h1 className="text-3xl font-semibold">{product.name}</h1>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black text-white px-4 py-2 text-base">
                        {formatGs(product.priceGs)}
                    </div>

                    <p className="mt-4 text-black/70 max-w-prose">
                        {product.description ??
                            "Descripción breve del producto: material, medidas, estilo y recomendaciones de uso."}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                        <a
                            href={whatsHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-4 py-2 text-sm transition-colors duration-200 hover:bg-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
                        >
                            Pedir por WhatsApp
                        </a>
                        <button
                            onClick={async () => {
                                const url = window.location.href;
                                const title = product.name;
                                const text = `${product.name} – ${formatGs(product.priceGs)}`;
                                try {
                                    if (navigator.share) {
                                        await navigator.share({ title, text, url });
                                    } else {
                                        await navigator.clipboard.writeText(url);
                                        alert("Enlace copiado al portapapeles");
                                    }
                                } catch { /* empty */ }
                            }}
                            className="rounded-lg border px-4 py-2 text-sm hover:bg-black/5"
                        >
                            Compartir
                        </button>
                    </div>

                    {/* Recomendados */}
                    {recs.length > 0 && (
                        <div className="mt-8">
                            <h2 className="font-semibold mb-3">Recomendados</h2>
                            <div className="grid grid-cols-3 gap-3">
                                {recs.map(r => (
                                    <Link
                                        key={r.id}
                                        to={`/producto/${r.slug}`}
                                        className="block rounded-xl overflow-hidden border border-black/10 transform-gpu transition-transform duration-200 hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                                        title={r.name}
                                    >
                                        <div className="aspect-[4/3] bg-black/[0.04]">
                                            {r.images?.length ? (
                                                <img
                                                    src={`/products/${encodeURIComponent(r.slug)}/${encodeURIComponent(r.images[0])}`}
                                                    alt={r.name}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            ) : null}
                                        </div>
                                        <div className="p-2">
                                            <div className="text-sm line-clamp-1">{r.name}</div>
                                            <div className="text-xs text-black/60">{formatGs(r.priceGs)}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-10 text-sm text-black/50">© 2025 · Shout Out</div>
        </section>
    );
}
