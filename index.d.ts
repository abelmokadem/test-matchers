declare global {
    namespace jasmine{
        interface Matchers {
            toContainExactPath(expected: string): boolean;
        }
    }
}

export const jasmine : jasmine.CustomMatcherFactories;
