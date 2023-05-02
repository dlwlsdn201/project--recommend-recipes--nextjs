import '@testing-library/dom';
import { describe } from '@jest/globals';
describe('Describe', () => {
	test('add', () => {
		const sum = (a, b) => a + b;
		expect(sum(1, 2)).toBe(3);
		console.log('test');
	});
});
