export type Product = {
    id: string;
    slug: string;
    name: string;
    category: string;
    priceGs: number;
    stock?: number;
    tags?: string[];
    images: string[];
    featured?: boolean;
    createdAt?: string;
    active?: boolean;
};