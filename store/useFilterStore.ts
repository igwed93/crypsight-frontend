import { create } from 'zustand';

interface FilterState {
  selectedTypes: string[];
  selectedCustody: string[];
  selectedChains: string[];
  setTypes: (type: string) => void;
  setCustody: (custody: string) => void;
  setChains: (chain: string) => void;
  resetAll: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedTypes: [],
  selectedCustody: [],
  selectedChains: [],

  setTypes: (type) => set((state) => ({
    selectedTypes: state.selectedTypes.includes(type)
      ? state.selectedTypes.filter((t) => t !== type)
      : [...state.selectedTypes, type],
  })),

  setCustody: (custody) => set((state) => ({
    selectedCustody: state.selectedCustody.includes(custody)
      ? state.selectedCustody.filter((c) => c !== custody)
      : [...state.selectedCustody, custody],
  })),

  setChains: (chain) => set((state) => ({
    selectedChains: state.selectedChains.includes(chain)
      ? state.selectedChains.filter((c) => c !== chain)
      : [...state.selectedChains, chain],
  })),

  resetAll: () => set({
    selectedTypes: [],
    selectedCustody: [],
    selectedChains: [],
  }),
}));