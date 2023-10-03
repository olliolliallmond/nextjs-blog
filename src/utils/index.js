
export const cx = (...classNames) => classNames.filter(Boolean).join(" ")

// cx fxn to add mutliple classes instead of dependencies
// accepts classNames as an argument
// filter out flasey values from classNames (0, null, undefined, ... )
// join truthy values with " " (single space)