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

const MainComponent = () => {
	const { setSpicyFilter, setMenuTypeFilter, setConceptFilter, setMaterials } =
		mainStore();
	return (
		<div className='root-container h-[100%] border-red-400 border-2 p-2'>
			<div className='inner-container h-[100%] grid gap-6 tablet:grid-cols-5 grid-cols-1 grid-rows-1 border-blue-300 border-2'>
				<div className='area--left border-green-400 border-2 col-span-2 p-8 flex items-start'>
					<div className='inner-wrapper h-fit'>
						<div className='title text-3xl'>
							<strong>
								당신의 집에 있는 재료들로 무엇을 만들 수 있을까요?
							</strong>
						</div>
						<div className='desc text-xl'>
							<p className='my-8'>
								작성한 재료들과 선택한 음식 종류를 기반으로 chatGPT 가 추천 음식
								레시피 몇 가지를 소개해 줄 것입니다.
							</p>
							<div>
								<ul className='list-disc'>
									<li>
										원하는 결과를 얻기 위해 재료는 최소 2가지 이상 입력해주세요!
									</li>
									<li>총 2~5개의 음식 레시피가 추천돼요!</li>
									<li>
										음식이 아닌 재료를 입력하면 정확한 결과가 나오지 않아요!
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='area--right border-yellow-400 border-2 col-span-3 p-8'>
					<div className='inner-wrapper grid grid-cols-1 gap-8'>
						<div className='filters--wrapper grid tablet:grid-cols-3 mobile:grid-cols-1 gap-5'>
							<div className='filter--block'>
								<div className='label'>맵기 정도</div>
								<div className='filter'>
									<Select
										options={spicyFilterItems}
										isExistAll
										onChange={(value) => {
											console.log('value:', value);
											setSpicyFilter(value);
										}}
									/>
								</div>
							</div>
							<div className='filter--block'>
								<div className='label'>종류</div>
								<div className='filter'>
									<Select
										options={menuTypeFilterItems}
										isExistAll
										onChange={setMenuTypeFilter}
									/>
								</div>
							</div>
							<div className='filter--block'>
								<div className='label'>목적</div>
								<div className='filter'>
									<Select
										options={conceptFilterItems}
										isExistAll
										onChange={setConceptFilter}
									/>
								</div>
							</div>
						</div>
						<div className='filters--wrapper grid grid-cols-2 gap-5 justify-stretch'>
							<div className='filter--block'>
								<div className='label'>재료1</div>
								<div className='filter'>
									<TextInput
										placeholder='입력'
										onChange={(value) => setMaterials('material1', value)}
									/>
								</div>
							</div>
							<div className='filter--block'>
								<div className='label'>재료2</div>
								<div className='filter'>
									<TextInput
										placeholder='입력'
										onChange={(value) => setMaterials('material2', value)}
									/>
								</div>
							</div>
							<div className='filter--block'>
								<div className='label'>재료3</div>
								<div className='filter'>
									<TextInput
										placeholder='입력'
										onChange={(value) => setMaterials('material3', value)}
									/>
								</div>
							</div>
							<div className='filter--block'>
								<div className='label'>재료4</div>
								<div className='filter'>
									<TextInput
										placeholder='입력'
										onChange={(value) => setMaterials('material4', value)}
									/>
								</div>
							</div>
						</div>
						<div className='filters--wrapper grid grid-cols-1'>
							<div className='submit--block auto-cols-max'>
								<Primary label='추천 받기' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainComponent;
