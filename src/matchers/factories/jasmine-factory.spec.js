import { createCustomMatcherFactory } from './jasmine-factory';

describe('jasmine-factory', () => {
    it('createCustomMatcherFactory should return function as', () => {
        const matchers = {
            foo: () => true
        };

        expect(createCustomMatcherFactory(matchers).foo()).toEqual({pass: true});
    });
});
