import { describe, it } from '@jest/globals';
import Login from '@/components/Login';
import { render, screen } from '@testing-library/react';

describe('Login Component', () => {
	it('renders title element', () => {
		render(<Login />);
		const titleElement = screen.getByRole('heading', {
			level: 2,
			name: /Sign in to your account/i
		});

		expect(titleElement).toBeInTheDocument();
		expect(1 + 1).toBe(2);
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
});
