import { create } from "zustand";

interface SearchType {
	title: string;
	location: string;
}

interface SearchState {
	search: SearchType;
	setSearch: (SearchType: SearchType) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
	search: {
		title: "",
		location: "",
	},
	setSearch: (search) => set(() => ({ search })),
}));
