import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

global.ResizeObserver = jest.fn(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn()
}));
