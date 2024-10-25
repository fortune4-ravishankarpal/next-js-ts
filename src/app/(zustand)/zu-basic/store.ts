import { create } from "zustand";

interface StoreState {
    count: number;
    increase: () => void;
    reset: () => void;
    decrement: () => void;
}

const useStore = create<StoreState>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrement: () =>
        set((state) => {
            let newCount = state.count - 1;
            if (newCount < 0) newCount = 0;
            return { count: newCount };
        }),
    reset: () => set({ count: 0 }),
}));

export default useStore;
