const pipe = (...fns) => (arg) => fns.reduce((value, fn) => fn(value), arg);

module.exports = { pipe }