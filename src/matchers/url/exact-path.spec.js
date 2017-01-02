import toContainExactPathMatcher from './exact-path';
import using from 'jasmine-data-provider';

describe('toMatchExactPath', () => {
    describe('should return true', () => {
        using(pathProvider, (expected, actual) => {
            it('if the path is contained in the url', () => {
                expect(toContainExactPathMatcher(expected, actual)).toBeTruthy();
            });
        });

        function pathProvider() {
            return [
                [
                    'http://foo.bar/',
                    '/'
                ], [
                    'http://foo.bar/simple',
                    '/simple'
                ], [
                    'http://foo.bar/simple-dash',
                    '/simple-dash'
                ], [
                    'http://foo.bar/simple/nested',
                    '/simple/nested'
                ], [
                    'http://foo.bar/simple/double/nested',
                    '/simple/double/nested'
                ], [
                    'http://foo.bar:80/with-port-number',
                    '/with-port-number'
                ]
            ]
        }
    });

    describe('should return false', () => {
       it('if the expected url is undefined', () => {
           expect(toContainExactPathMatcher(void 0, '')).toBeFalsy();
       });

        it('if the actual path is undefined', () => {
            expect(toContainExactPathMatcher('http://foo.bar/', void 0)).toBeFalsy();
        });

        it('if the url is invalid', () => {
            expect(toContainExactPathMatcher('foobar', '')).toBeFalsy();
        });
    });
});
