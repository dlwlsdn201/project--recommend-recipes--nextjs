export interface INTERFACE_loginStore {
	userId: string;
	setUserId: Function;
	password: string;
	setPassword: Function;
}

export interface INTERFACE_mainStore {
	spicyFilter: number | 'all';
	setSpicyFilter: Function;
	menuTypeFilter: number | 'all';
	setMenuTypeFilter: Function;
	conceptFilter: number | 'all';
	setConceptFilter: Function;
	material1: string;
	material2: string;
	material3: string;
	material4: string;
	setMaterials: Function;
}
