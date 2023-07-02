import React from 'react';
import Select from '../Modules/Select';
import {
	conceptFilterItems,
	menuTypeFilterItems,
	spicyFilterItems
} from './Filters';
import TextInput from '../Modules/TextInput';
import { mainStore } from '@/source/store';
import Primary from '../Modules/Buttons/Primary';
import * as dotenv from 'dotenv';
import { CREATE_RECOMMEND_RECIPES } from '../../api';
import { formatInputDataToRequest, formatResult } from './Handlers';
import Loading from '../Modules/Loading';

dotenv.config({ path: __dirname + '/client/.env' });

const MainComponent = () => {
	const {
		material1,
		material2,
		material3,
		// material4,
		spicyFilter,
		menuTypeFilter,
		conceptFilter,
		setSpicyFilter,
		setMenuTypeFilter,
		setConceptFilter,
		setMaterials,
		loading,
		setLoading,
		apiData,
		setApiData,
		isRequested,
		setIsRequested,
		setModal
	} = mainStore();

	// === update state
	const updateResult = (value: String): void => {
		setApiData(value);
	};

	const updateSucceed = () => {
		setLoading(false);
		setIsRequested(true);
		setModal(true);
	};
	const updateFailed = () => {
		setLoading(false);
		setIsRequested(false);
	};

	// Chat GPT OpenAI API 요청 함수
	const onFinishForm = async () => {
		try {
			setLoading(true);
			// 사용자 입력 값 전달 및 응답 받기
			const inputValues = {
				spicyFilter,
				menuTypeFilter,
				conceptFilter,
				materials: [material1, material2, material3]
			};
			const formattedUserInput = formatInputDataToRequest(inputValues);
			const response = await CREATE_RECOMMEND_RECIPES({
				userInput: formattedUserInput
			});
			if (response.status >= 200 && response.status < 300) {
				updateResult(response?.data?.choices[0]?.text);
				// const formattedResult = formatResult(response?.data?.choices[0]?.text);
				updateSucceed();
			}
		} catch (error) {
			updateFailed();
			console.error(error);
		}
	};

	const isDisabled = Boolean(!material1 && !material2 && !material3);
	return (
									{/* <div className='filter--block'>
										<div className='label'>재료4</div>
										<div className='filter'>
											<TextInput
												testId='homePage-input-material4'
												placeholder='입력'
												onChange={(value) => setMaterials('material4', value)}
												value={material4}
											/>
										</div>
									</div> */}
	);
};

export default MainComponent;
