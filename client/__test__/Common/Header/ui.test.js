import Header from '@/components/header';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';

describe('Header UI', () => {
	it('Is check Logo image', () => {
		const imgSrc = '/public/images/logo.png';
		const alt = 'Logo';
		const { getByAltText } = render(<Header />);

		const logoElement = getByAltText(alt);
		expect(logoElement).toHaveAttribute('src', imgSrc);
	});
});
