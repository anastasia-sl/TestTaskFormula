import create from 'zustand';

type FormulaStore = {
    formula: string[];
    setFormula: (formula: string) => void;
    insertOperand: (operand: string) => void;
    deleteTag: (index: number) => void;
};

export const useFormulaStore = create<FormulaStore>((set) => ({
    formula: [],
    setFormula: (newFormula) => set({ formula: newFormula.split(' ') }),
    insertOperand: (operand) => set((state) => ({ formula: [...state.formula, operand] })),
    deleteTag: (index) =>
        set((state) => ({ formula: state.formula.filter((_, i) => i !== index) })),
}));