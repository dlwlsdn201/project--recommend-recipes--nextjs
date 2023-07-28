import HomePage from '@/pages/home';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home page UI 렌더링 Test', () => {
	it('1. Description UI', () => {
		render(<HomePage />);
		const desc = screen.getByTestId('homePage-description');
		expect(desc).toBeInTheDocument();
	});

	it('2. 추천 필터 및 입력 UI ', () => {
		render(<HomePage />);
		// 맵기 정도 필터 UI
		const spicyFilter = screen.getByTestId('homePage-filter-spicy');
		// 음식 종류 필터 UI
		const menuTypeFilter = screen.getByTestId('homePage-filter-menuType');
		// 음식 목적 필터 UI
		const conceptFilter = screen.getByTestId('homePage-filter-concept');
		// 재료1 입력 UI
		const material1 = screen.getByTestId('homePage-input-material1');
		// 재료2 입력 UI
		const material2 = screen.getByTestId('homePage-input-material2');
		// 재료3 입력 UI
		const material3 = screen.getByTestId('homePage-input-material3');
		// 재료4 입력 UI
		// const material4 = screen.getByTestId('homePage-input-material4');
		// form submit UI
		const submitButton = screen.getByTestId('homePage-submit-button');

		expect(spicyFilter).toBeInTheDocument();
		expect(menuTypeFilter).toBeInTheDocument();
		expect(conceptFilter).toBeInTheDocument();
		expect(material1).toBeInTheDocument();
		expect(material2).toBeInTheDocument();
		expect(material3).toBeInTheDocument();
		// expect(material4).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
