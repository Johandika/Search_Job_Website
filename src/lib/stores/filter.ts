import { create } from "zustand";

interface FilterType {
	jobTypes: string[];
	categories: string[];
	salaryRange: string[];
}

interface FilterState {
	filter: FilterType;
	setFilter: (filterType: FilterType) => void;
	resetFilter: () => void;
}

const initialState = {
	categories: [],
	jobLevels: [],
	jobTypes: [],
	salaryRange: [],
};

export const useFilterStore = create<FilterState>((set) => ({
	filter: initialState,
	setFilter: (filter) => set(() => ({ filter })),
	resetFilter: () => set({ filter: initialState }),
}));
