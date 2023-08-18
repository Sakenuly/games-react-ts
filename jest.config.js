/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	jest: {
		setupFiles: ['jest-localstorage-mock'],
	},
};
