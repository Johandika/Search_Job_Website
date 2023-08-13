import { create } from "zustand";

interface FilterType {
	jobTypes?: string[];
	categories?: string[];
	salaryRange?: string[];
	industry?: string[];
	companySize?: string[];
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
	industry: [],
	companySize: [],
};

export const useFilterStore = create<FilterState>((set) => ({
	filter: initialState,
	setFilter: (filter) => set(() => ({ filter })),
	resetFilter: () => set({ filter: initialState }),
}));
