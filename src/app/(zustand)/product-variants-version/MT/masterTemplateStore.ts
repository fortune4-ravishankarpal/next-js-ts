import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { MasterTemplate, MasterTemplateArray } from "./AddEditMaterTemplate";

const myMiddlewares = <T>(f: (set: (updater: (state: T) => T) => void) => T) => devtools(persist(f, { name: "MasterTemplate" }));

interface MasterTemplateStore {
    List: MasterTemplateArray;
    setList: (list: MasterTemplateArray) => void;
    selectedMT: MasterTemplate | null;
    setSelectedMT: (mt: MasterTemplate) => void;
    selectedMTtoNull: () => void;
}

export const MasterTemplateStore = create<MasterTemplateStore>()(
    myMiddlewares((set) => ({
        List: [],
        selectedMT: null,
        setList: (list: MasterTemplateArray) => set((state) => ({ ...state, List: list })),
        setSelectedMT: (mt: MasterTemplate) => set((state) => ({ ...state, selectedMT: mt })),
        selectedMTtoNull: () => set((state) => ({ ...state, selectedMT: null })),
    }))
);

export default MasterTemplateStore;
