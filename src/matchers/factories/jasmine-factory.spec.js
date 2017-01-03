import { createCustomMatcherFactory } from './jasmine-factory';

describe('jasmine-factory', () => {
    describe('createCustomMatcherFactory', () => {
        it('should create functions that return an object with a compare key', () => {
            const matchers = {
                foo: () => true
            };

            expect(createCustomMatcherFactory(matchers).foo().hasOwnProperty('compare')).toBeTruthy();
        });

        it('should wrap functions in an object containing a pass key', () => {
            const matchers = {
                foo: () => true
            };

            expect(createCustomMatcherFactory(matchers).foo().compare()).toEqual({
                pass: true
            });
        });
    });
});
