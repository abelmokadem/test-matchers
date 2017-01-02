declare module global {
    namespace jasmine{
        interface Matchers {
            toContainExactPath(expected: string): boolean;
        }
    }
}
