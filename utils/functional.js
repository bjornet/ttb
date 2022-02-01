/**
 * @param {function} fn
 * @returns {function} partially applied function
 */
export const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
};

/**
 * @param  {...function} fns
 * @returns {function} a function ready to be called with data
 */
export const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

/**
 *
 * @param {*} x
 * @returns {object} Box
 */
export const Box = (x) => ({
  x,
  map: f => Box(f(x)),
  fold: () => x,
});

/**
 * a tool for tracing the value in composition
 * @param {string} tag
 * @param {any} x
 * @returns {any} x value untouched
 */
const traceShallow = (tag, x) => {
  // eslint-disable-next-line no-console
  console.log(tag, x);
  return x;
};
export const trace = curry(traceShallow);

/**
 * A curried function expecting an object key,
 * returning a function that is ready to be called with an object as data.
 * @param {string} key
 * @returns {any} value
 */
export const pick = (key) => (o) => o[key];

/**
 * @param {array|string} x
 * @returns {array|string} x value reversed
 */
export const reverse = (x) =>
  Array.isArray(x) ? x.reverse() : x.split("").reverse().join("");

/**
 * @param {function} mapper
 * @param {array} list
 * @returns {array} list mapped with mapper
 */
const mapShallow = (mapper, list) => list.map(mapper);
export const map = curry(mapShallow);

export const sortBy = curry((fn, xs) =>
  xs.sort((a, b) => {
    if (fn(a) === fn(b)) {
      return 0;
    }

    return fn(a) > fn(b) ? 1 : -1;
  })
);

/**
 * Operates over semi groups
 * @param {string | array} a
 * @param {string | array} b
 * @returns {string | array} a and b concatenated
 */
const concatShallow = (a, b) => a.concat(b);
export const concat = curry(concatShallow);

/**
 * Calls a binary function with flipped arguments
 * @param {function} fn
 * @param {*} a
 * @param {*} b
 * @returns {*}
 */
const flipShallow = (fn, a, b) => fn(b, a);
export const flip = curry(flipShallow);

/**
 * @param {array} xs
 * @returns {any} value of last element in xs
 */
export const last = (xs) => xs && xs[xs.length - 1];

/**
 * @param {string} str
 * @returns {array} list of words in str split by a whitespace
 */
export const splitByWhitespace = (str) => str.split(" ");
