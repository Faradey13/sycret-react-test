
import {create} from "zustand/react";
import fetchProducts from "../service/productService";
import {IProduct} from "./type";
interface ProductStore {
    products: IProduct[];
    isLoading: boolean;
    setProducts: (products: IProduct[]) => void;
    fetchProductsData: () => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
    products: [],
    isLoading: false,
    setProducts: (products) => set({ products }),
    fetchProductsData: async () => {
        set({ isLoading: true });

        try {
            const products = await fetchProducts();
            set({ products });
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useProductStore;