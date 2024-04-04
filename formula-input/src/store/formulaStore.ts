// zustandStore.ts
import create from 'zustand';

interface Tag {
    id: string;
    content: string;
}

interface FormulaState {
    formula: Tag[];
    addTag: () => void;
    removeTag: (id: string) => void;
    updateTagContent: (id: string, content: string) => void;
}

const useStore = create<FormulaState>((set) => ({
    formula: [],
    addTag: () => {
        set((state) => ({
            formula: [...state.formula, { id: Date.now().toString(), content: '' }],
        }));
    },
    removeTag: (id) => {
        set((state) => ({
            formula: state.formula.filter((tag) => tag.id !== id),
        }));
    },
    updateTagContent: (id, content) => {
        set((state) => ({
            formula: state.formula.map((tag) =>
                tag.id === id ? { ...tag, content } : tag
            ),
        }));
    },
}));

export default useStore;
