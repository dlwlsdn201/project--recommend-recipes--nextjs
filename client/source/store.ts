import { create } from 'zustand';
import { INTERFACE_loginStore, INTERFACE_mainStore } from './types';

// [store] 전역 데이터
export const rootStore = (set) => ({});

// [store] Login 페이지 데이터
export const loginStore = create<INTERFACE_loginStore>((set) => ({
	userId: undefined,
	setUserId: (value: string) => set(() => ({ userId: value })),
	password: undefined,
	setPassword: (value: string) => set(() => ({ password: value }))
}));

export const mainStore = create<INTERFACE_mainStore>((set) => ({
	spicyFilter: 0,
	setSpicyFilter: (value: 0 | 1 | 2 | 3) => set(() => ({ spicyFilter: value })),
	menuTypeFilter: 0,
	setMenuTypeFilter: (value: 0 | 1 | 2 | 3 | 4) =>
		set(() => ({ menuTypeFilter: value })),
	conceptFilter: 0,
	setConceptFilter: (value: 0 | 1 | 2 | 3 | 4 | 5 | 6) =>
		set(() => ({ conceptFilter: value })),
	material1: undefined,
	material2: undefined,
	material3: undefined,
	material4: undefined,
	setMaterials: (key: string, value: string) => set(() => ({ [key]: value })),
	loading: false,
	setLoading: (value) => set(() => ({ loading: value })),
	apiData: undefined,
	setApiData: (value) => set(() => ({ apiData: value })),
	modal: true,
	setModal: (value) => set(() => ({ modal: value })),
	isRequested: false,
	setIsRequested: (value) => set(() => ({ isRequested: value }))
}));

// const hookDevtools = (store) => create(devtools(store));
