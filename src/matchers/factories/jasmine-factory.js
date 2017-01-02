export function createCustomMatcherFactory(matchers) {
    return Object.keys(matchers)
        .reduce((memo, key) => {
            memo[key] = (actual, expected) => ({pass: matchers[key](actual, expected)})

            return memo;
        }, {})
}
