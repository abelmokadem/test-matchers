import url from 'url';

export const toContainExactPath = function (actual, expected) {
    if (typeof actual !== 'string' || typeof expected !== 'string') {
        return false;
    }

    const actualUrl = url.parse(actual);

    return actualUrl.pathname === expected;
};
