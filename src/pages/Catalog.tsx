import { useMemo, useState } from "react";
import { PRODUCTS } from "../data/products";
import { formatGs } from "../utils/currency";
import type { Product } from "../types/Products";

type Filters = { q: string; category: string; min?: number; max?: number };

const getCategories = (items: Product[]) => {
    const set = new Set(items.filter(p => p.active !== false).map(p => p.category));
    return ["Todos", ...Array.from(set).sort()];
};

export default function CatalogPage() {
    const [filters, setFilters] = useState<Filters>({ q: "", category: "Todos" });
    const categories = useMemo(() => getCategories(PRODUCTS), []);

    const filtered = useMemo(() => {
        const q = filters.q.trim().toLowerCase();
        return PRODUCTS.filter(p => p.active !== false)
            .filter(p => (filters.category === "Todos" ? true : p.category === filters.category))
            .filter(p => (q ? [p.name, p.category, ...(p.tags ?? [])].join(" ").toLowerCase().includes(q) : true))
            .filter(p => (typeof filters.min === "number" ? p.priceGs >= filters.min! : true))
            .filter(p => (typeof filters.max === "number" ? p.priceGs <= filters.max! : true));
    }, [filters]);

    const parseNumber = (s: string) => {
        const n = Number(s.replace(/\D/g, ""));
        return Number.isFinite(n) ? n : undefined;
    };

    return (
        <section className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-semibold mb-4">Catálogo</h1>

            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                <input
                    placeholder="Buscar…"
                    className="rounded-lg border border-black/10 px-4 py-3 outline-none"
                    value={filters.q}
                    onChange={(e) => setFilters(f => ({ ...f, q: e.target.value }))}
                />
                <select
                    className="rounded-lg border border-black/10 px-4 py-3"
                    value={filters.category}
                    onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))}
                >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input
                    inputMode="numeric"
                    placeholder="Min ₲"
                    className="rounded-lg border border-black/10 px-4 py-3"
                    onChange={(e) => setFilters(f => ({ ...f, min: parseNumber(e.target.value) }))}
                />
                <input
                    inputMode="numeric"
                    placeholder="Max ₲"
                    className="rounded-lg border border-black/10 px-4 py-3"
                    onChange={(e) => setFilters(f => ({ ...f, max: parseNumber(e.target.value) }))}
                />
            </div>

            {/* Grid de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map(p => (
                    <article key={p.id} className="rounded-lg border border-black/10 overflow-hidden bg-white">
                        <div className="aspect-[4/3] bg-black/[0.04]">
                            {p.images?.length ? (
                                <img
                                    src={`/products/${encodeURIComponent(p.slug)}/${encodeURIComponent(p.images[0])}`}
                                    alt={p.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-black/40">
                                    Sin imagen
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium leading-tight">{p.name}</h3>
                            <p className="text-sm text-black/60">{p.category}</p>
                            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-black text-white px-3 py-1 text-sm">
                                <span>{formatGs(p.priceGs)}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center text-black/60 py-12">
                    No se encontraron productos con esos filtros.
                </div>
            )}
        </section>
    );
}
