import { mainStore } from '@/source/store';
import { CREATE_RECOMMEND_RECIPES } from '../../api';
import HomePage from '@/pages/home';
import MainComponent from '@/components/Home';
import { describe } from '@jest/globals';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';

// API 함수 모의(mock) 구현
jest.mock('../../api/', () => ({
	CREATE_RECOMMEND_RECIPES: jest.fn()
}));
jest.mock('resize-observer-polyfill');

jest.mock('@/source/store', () => ({
	mainStore: jest.fn()
}));

describe('1. 레시피 추천하기 API 호출 테스트', () => {
	it('calls the API function when the button is clicked', async () => {
		// setState 함수 모의 (mock) 설정
		const setModalMock = jest.fn();
		mainStore.mockReturnValue({
			modal: false,
			setModal: setModalMock
		});

		// API 함수 모의(mock) 설정
		const mockedApiResponse = {
			status: 200,
			data: {
				choices: [
					{
						text: '추천 레시피 1'
					}
				]
			}
		};

		CREATE_RECOMMEND_RECIPES.mockResolvedValueOnce(mockedApiResponse);

		// 컴포넌트 렌더링
		const { getByTestId, queryByTestId, findByTestId } = render(<HomePage />);

		render(<MainComponent />);

		// 버튼 클릭 이벤트 실행
		const submitButtonEle = screen.getByTestId('homePage-submit-button');
		fireEvent.click(submitButtonEle);

		// API 함수 호출을 기다림
		await waitFor(() => {
			expect(CREATE_RECOMMEND_RECIPES).toHaveBeenCalledTimes(1); // 한 번 호출
			expect(CREATE_RECOMMEND_RECIPES).toHaveBeenCalledWith({
				userInput: expect.any(String)
			});
		});
		await findByTestId('homePage-result-modal');

		expect(mockedApiResponse.data.choices[0].text).not.toBeUndefined();
		// setModal 함수가 호출되었는지 확인
		expect(setModalMock).toHaveBeenCalledWith(true);
		// await waitFor(() => {
		// 	exp;
		// });

		// API 호출 후 결과 처리를 확인
		// expect(setModal).toHaveBeenCalledWith(true);
		// expect(resultModalEle).not.toBeEmptyDOMElement();
		expect(CREATE_RECOMMEND_RECIPES).toHaveBeenCalled();
	});
});
