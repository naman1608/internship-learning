// 2 parameter
function addCurrying(x) {
  return function (y) {
    return x + y;
  };
}

console.log(addCurrying(2)(3));

const add2 = addCurrying(2);
console.log(add2);
console.log(add2(4));

// n parameter
const add = (n) => {
  const curry = (args, total) => {
    if (args.length === n) {
      return total;
    }
    return (x) => curry(args.concat(x), total + x);
  };
  return curry([], 0);
};

console.log(add(3)(1)(2)(3));

// no fixed number
const infiniteCurry = function (...args) {
  const currentSum = args.reduce(
    (accumulator, value) => accumulator + value,
    0
  );
  console.log(currentSum);
  const curried = (...furtherArgs) => {
    if (curriedArgs.length === 0) return currentSum;
    return infiniteCurry(...furtherArgs, currentSum);
  };
  return curried;
};

console.log(infiniteCurry(2)(3)());
console.log(infiniteCurry(2, 3, 4, 5)(10)(15)());
