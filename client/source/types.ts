export interface INTERFACE_loginStore {
	userId: string;
	setUserId: Function;
	password: string;
	setPassword: Function;
}

export interface INTERFACE_mainStore {
	spicyFilter: 0 | 1 | 2 | 3;
	setSpicyFilter: Function;
	menuTypeFilter: 0 | 1 | 2 | 3 | 4;
	setMenuTypeFilter: Function;
	conceptFilter: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	setConceptFilter: Function;
	material1: String;
	material2: String;
	material3: String;
	material4: String;
	setMaterials: Function;
	loading: Boolean;
	setLoading: Function;
}
