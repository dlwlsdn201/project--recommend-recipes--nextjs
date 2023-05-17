import React from 'react';
const MainComponent = () => {
	return (
		<div className='root-container border-red-400 border-2 p-2'>
			<div className='inner-container grid gap-6 grid-cols-5 grid-rows-1 border-blue-300 border-2'>
				<div className='area--left border-green-400  border-2 col-span-2'>
					<strong className='text-3xl'>
						당신의 집에 있는 재료들로 무엇을 만들 수 있을까요?
					</strong>
					<p>
						작성한 재료들과 선택한 음식 종류를 기반으로 chatGPT 가 추천 음식
						레시피 몇 가지를 소개해 줄 것입니다.
					</p>
					<div>
						<ul>
							<li>
								원하는 결과를 얻기 위해 재료는 최소 2가지 이상 입력해주세요!
							</li>
							<li>총 2~5개의 음식 레시피가 추천돼요!</li>
							<li>음식이 아닌 재료를 입력하면 정확한 결과가 나오지 않아요!</li>
						</ul>
					</div>
				</div>
				<div className='area--right border-yellow-400 border-2 col-span-3 px-4 py-2'>
					<div className='filters--wrapper'>
						<div className='filter--block'>
							<div className='label'>맵기 정도</div>
							<div className='filter'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainComponent;
