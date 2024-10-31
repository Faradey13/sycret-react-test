import {create} from "zustand/react";
import {createJSONStorage, persist} from 'zustand/middleware';
import {IProduct} from "../../Product/model/type";

interface BasketStore {
    basket: IProduct[];
    addItem: (item: IProduct) => void;
    removeItem: (id: number | string) => void;
    clearCart: () => void;

}



const useBasketStore = create<BasketStore>()(persist(
    (set) => ({
        basket: [],
        addItem: (item) => set((state) => ({ basket: [...state.basket, item] })),
        removeItem: (id) => set((state) => ({
            basket: state.basket.filter((product) => product.ID !== id),
        })),
        clearCart: () => set({ basket: [] }),

    }),
    {
        name: 'basket-storage',
        storage: createJSONStorage(() => localStorage)
    }
));

export default useBasketStore;