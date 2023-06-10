// === formatter ===

import {
	conceptFilterItems,
	menuTypeFilterItems,
	spicyFilterItems
} from './Filters';

interface IinputValues {
	spicyFilter: 0 | 1 | 2 | 3;
	menuTypeFilter: 0 | 1 | 2 | 3 | 4;
	conceptFilter: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	materials: String[];
}

export const formatInputDataToRequest = (inputValues: IinputValues) => {
	const { spicyFilter, menuTypeFilter, conceptFilter, materials } = inputValues;

	const formattedValues = {
		matreials: materials.join(', '),
		spicyFilter: spicyFilterItems?.find(
			(option) => option?.value === spicyFilter
		)?.label,
		menuTypeFilter: menuTypeFilterItems?.find(
			(option) => option?.value === menuTypeFilter
		)?.label,
		conceptFilter: conceptFilterItems?.find(
			(option) => option?.value === conceptFilter
		)?.label
	};

	let result: string = `
    1. 냉장고에 있는 재료: ${formattedValues?.matreials},
    2. 음식 종류: ${formattedValues?.spicyFilter},
    3. 맵기 정도:${formattedValues?.menuTypeFilter}, 
    4. 분위기: ${formattedValues?.conceptFilter}, 

    위의 조건에 적절한 음식 추천 메뉴 2가지와 각각의 조리 레시피를 알려줘
  `;

	return result;
};

export const formatResult = (rowData: string): JSX.Element => {
	let result: JSX.Element[];
	if (rowData) {
		const lines: string[] = rowData.split('\n');
		result = lines
			.map((line: string): string => line.trim())
			.filter((line: string): boolean => line !== '')
			.map((line: string, index: number): JSX.Element => {
				const recipeInfo: string = line.replace(/^\d+\.\s*/, '');
				return <li key={index}>{recipeInfo}</li>;
			});
	}

	return <ul>{result}</ul>;
};
