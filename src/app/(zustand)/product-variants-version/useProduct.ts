import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product, Variant } from "./product-variant.types";
const myMiddlewares = <T>(f: (set: (updater: (state: T) => T) => void) => T) => devtools(persist(f, { name: "productList" }));

interface ProductState {
    products: Product[] | null;
    setProducts: (products: Product[]) => void;
    selectedProduct: Product | null;
    selectProduct: (product: Product) => void;
    selectedVariant: Variant | null;
    selectVariant: (variant: Variant) => void;
}

export const useProductStore = create<ProductState>()(
    myMiddlewares((set) => ({
        products: null,
        setProducts: (products) => set((state) => ({ ...state, products })),
        selectedProduct: null,
        selectProduct: (product) => set((state) => ({ ...state, product })),
        selectedVariant: null,
        selectVariant: (variant) => set((state) => ({ ...state, variant })),
    }))
);

export default useProductStore;
