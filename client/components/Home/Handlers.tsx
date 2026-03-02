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
): Array<{ title: string; desc: string }> => {
  let result: Array<{ title: string; desc: string }> = [];

  if (rowData) {
    // Split by header "###" which Gemini usually uses for menu titles
    // If not found, it will just be one big slide
    const sections = rowData.split(/(?=###)/g).filter(section => section.trim().length > 0);

    sections.forEach((section) => {
      const lines = section.split('\n');
      const firstLine = lines[0].replace('###', '').trim();
      const title = firstLine || '추천 메뉴';
      const desc = section.trim(); // Keep the whole section including the header for better markdown rendering

      result.push({
        title,
        desc,
      });
    });

    // Fallback if no sections were parsed
    if (result.length === 0) {
      result.push({
        title: '추천 결과',
        desc: rowData,
      });
    }
  }

  return result;
};
