import { toContainExactPath } from './url/exact-path';
import { createCustomMatcherFactory } from './factories/jasmine-factory';

export const matchers = createCustomMatcherFactory({
    toContainExactPath
});
