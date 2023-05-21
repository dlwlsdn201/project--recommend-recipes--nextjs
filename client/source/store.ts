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
	spicyFilter: undefined,
	setSpicyFilter: (value: number) => set(() => ({ spicyFilter: value })),
	menuTypeFilter: undefined,
	setMenuTypeFilter: (value: number) => set(() => ({ menuTypeFilter: value })),
	conceptFilter: undefined,
	setConceptFilter: (value: number) => set(() => ({ conceptFilter: value })),
	material1: undefined,
	material2: undefined,
	material3: undefined,
	material4: undefined,
	setMaterials: (key: string, value: string) => set(() => ({ [key]: value }))
}));

// const hookDevtools = (store) => create(devtools(store));
