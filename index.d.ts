declare global {
    namespace jasmine{
        interface Matchers {
            toContainExactPath(expected: string): boolean;
        }
    }
}

export const jasmineMatchers : jasmine.CustomMatcherFactories;
