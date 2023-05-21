export interface INTERFACE_loginStore {
	userId: string;
	setUserId: Function;
	password: string;
	setPassword: Function;
}

export interface INTERFACE_mainStore {
	spicyFilter: number;
	setSpicyFilter: Function;
	menuTypeFilter: number;
	setMenuTypeFilter: Function;
	conceptFilter: number;
	setConceptFilter: Function;
	material1: string;
	material2: string;
	material3: string;
	material4: string;
	setMaterials: Function;
}
