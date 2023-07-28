export interface INTERFACE_commonStore {
	isLogin: boolean;
	setIsLogin: Function;
}

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
	material1: string;
	material2: string;
	material3: string;
	// material4: string;
	setMaterials: Function;
	loading: boolean;
	setLoading: Function;
	apiData: string;
	setApiData: Function;
	modal: boolean;
	setModal: Function;
	isRequested: boolean;
	setIsRequested: Function;
}
