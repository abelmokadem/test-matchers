import { urlMatchers } from './jasmine-adapter';

describe('jasmine-adapter', () => {
    it('toContainExactPath should return object containing compare', () => {
        expect(typeof urlMatchers.toContainExactPath().compare).toBe('function');
    });
});
