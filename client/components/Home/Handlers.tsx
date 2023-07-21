// === formatter ===

import { ReactNode } from 'react';
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

    위의 조건에 적절한 음식 추천 메뉴 2개의 이름과 조리 레시피를 각각 따로 알려줘
  `;

	return result;
};

export const formatResult = (
	rowData: string
): Array<{ title: string; desc: ReactNode }> => {
	const insertToResult = (
		resultArray: any[],
		title: string,
		descriptions: React.ReactElement[]
	) => {
		const result = resultArray;
		result.push({
			title,
			desc: <ul>{descriptions}</ul>
		});

		return result;
	};

	let result: Array<{ title: string; desc: string | React.ReactElement }> = [];
	if (rowData) {
		const lines: string[] = rowData
			.split('\n')
			.map((line: string): string => line.trim())
			.filter((line: string): boolean => line !== '');

		let currentCategory: string = '';
		let currentRecipe: React.ReactElement[] = [];
		let isChanged: boolean = false;
		lines.forEach((item: string, index) => {
			if (item.startsWith('음식 추천 메뉴') || item.startsWith('추천 메뉴')) {
				// Title
				// Extract the category title
				const categoryTitle = item.split(':')[1].trim();
				if (currentCategory.length > 0 && currentRecipe.length > 0) {
					isChanged = true;
					if (isChanged) {
						// 제목, 설명이 이미 존재할 경우
						result = insertToResult(result, currentCategory, currentRecipe);
						currentCategory = '';
						currentRecipe = [];
					}
				}
				currentCategory = categoryTitle;
			} else if (item.startsWith('조리 레시피:')) {
				// Ignore the recipe description
				return;
			} else {
				// Append the recipe step to the current recipe
				// console.log({ item });
				const validText = item.split('.')[1] && item.split('.')[1].length > 0;
				if (validText) currentRecipe.push(<li>{item}</li>); // 빈 내용 레시피 line 이 아닐 경우에만 삽입
				isChanged = false;
				if (lines.length === index + 1) isChanged = true; // 마지막 item일 경우
				if (isChanged) {
					result = insertToResult(result, currentCategory, currentRecipe);
					currentCategory = '';
					currentRecipe = [];
				}
			}
		});
	}
	return result;
};
