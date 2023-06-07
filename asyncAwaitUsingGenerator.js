// not working

const asyncFunction = (func) => {
  const innerFunction = (...args) => {
    function* generatorFunc() {
      const data = yield func(...args);
      return data;
    }

    const generatorObject = generatorFunc();
    const futureData = generatorObject.next().value;
    console.log(futureData);
    futureData.then((value) => generatorObject.next(value));
  };
  return innerFunction;
};

const func = asyncFunction((pageNumber) =>
  fetch(`https://reqres.in/api/users?page=${pageNumber}`)
);

func(2);

console.log("hi");
