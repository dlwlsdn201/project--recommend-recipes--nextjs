import ContactPage from '@/pages/contact';
import { render, screen } from '@testing-library/react';

describe('Contact page UI 렌더링 Test', () => {
	it('1. 이름 입력 UI', () => {
		render(<ContactPage />);
		// const desc = screen.getByTestId('homePage-description');
		const labelInputName = screen.getByLabelText('이름');
		expect(labelInputName).toBeInTheDocument();
		expect(labelInputName.value).toBe('');
	});

	it('2. 이메일 입력 UI ', () => {
		render(<ContactPage />);
		// const desc = screen.getByTestId('homePage-description');
		const labelInputEmail = screen.getByLabelText('이메일');
		expect(labelInputEmail).toBeInTheDocument();
		expect(labelInputEmail.value).toBe('');
	});
	it('3. 연락처 입력 UI ', () => {
		render(<ContactPage />);
		// const desc = screen.getByTestId('homePage-description');
		const labelInputPhoneNumber = screen.getByTestId('submit-button');
		expect(labelInputPhoneNumber).toBeInTheDocument();
		expect(labelInputPhoneNumber.value).toBe('');
	});
	it('4. form 작성 완료 버튼 UI ', () => {
		render(<ContactPage />);
		// const desc = screen.getByTestId('homePage-description');
		const submitButton = screen.getByRole('button');
		expect(submitButton).toBeInTheDocument();
		// expect(submitButton.value).toBe('');
	});
});
