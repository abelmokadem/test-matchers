import url from 'url';

export const toContainExactPathMatcher = function (actual, expected) {
    if (typeof actual !== 'string' || typeof expected !== 'string') {
        return false;
    }

    const actualUrl = url.parse(actual);



    return actualUrl.pathname === expected;
};

export default toContainExactPathMatcher;
