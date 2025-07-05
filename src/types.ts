export type User = {
    id: number;
    name: string;
    email: string;
    role_id?: number;
    role: Role;
}

export type Role = {
    id: number;
    name: string;
    permissions?: Permission[];
}

export type Permission = {
    id: number;
    name: string;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
}

export type Order = {
    id: number;
    name: string;
    createdAt: string;
    total: number;
    products: Product[]
}
