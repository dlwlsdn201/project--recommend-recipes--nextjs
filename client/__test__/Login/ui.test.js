import { describe, it } from '@jest/globals';
import Login from '@/components/Login';
import { render, screen } from '@testing-library/react';

// function renderHooks(Component) {
// 	render(<RecoilRoot>{Component}</RecoilRoot>);
// }

describe('Login Component', () => {
	it('renders title element', () => {
		render(<Login />);
		const titleElement = screen.getByRole('heading', {
			level: 2,
			name: /로 그 인/i
		});

		expect(titleElement).toBeInTheDocument();
	});

	test('renders email input element', () => {
		render(<Login />);
		const emailInputElement = screen.getByLabelText(/email address/i);
		expect(emailInputElement).toBeInTheDocument();
		expect(emailInputElement).toHaveAttribute('type', 'email');
		expect(emailInputElement).toHaveAttribute('required');
	});

	test('renders password input element', () => {
		render(<Login />);
		const passwordInputElement = screen.getByLabelText(/password/i);
		expect(passwordInputElement).toBeInTheDocument();
		expect(passwordInputElement).toHaveAttribute('type', 'password');
		expect(passwordInputElement).toHaveAttribute('required');
	});

	test.only('renders SNS Login UI', () => {
		render(<Login />);
		const snsElement = screen.getByTestId('sns-login');
		expect(snsElement).toBeInTheDocument();
	});
});
