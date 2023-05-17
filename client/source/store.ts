import { create } from 'zustand';
import { INTERFACE_loginStore } from './types';
import { devtools } from 'zustand/middleware';

// [store] 전역 데이터
export const rootStore = (set) => ({});

// [store] Login 페이지 데이터
export const loginStore = create<INTERFACE_loginStore>((set) => ({
	userId: undefined,
	setUserId: (value: string) => set(() => ({ userId: value })),
	password: undefined,
	setPassword: (value: string) => set(() => ({ password: value }))
}));

// const hookDevtools = (store) => create(devtools(store));
