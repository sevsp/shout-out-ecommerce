export type Product = {
    id: string;
    slug: string;
    name: string;
    category: string;
    priceGs: number;
    stock?: number;
    tags?: string[];
    description?: string;  // ← NUEVO (opcional)
    sku?: string;          // ← opcional
    images: string[];
    featured?: boolean;
    createdAt?: string;
    active?: boolean;
};