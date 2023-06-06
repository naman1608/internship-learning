function deepObjectCompare(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    const obj1Value = obj1[key];
    const obj2Value = obj2[key];

    if (!areValuesEqual(obj1Value, obj2Value)) {
      return false;
    }
  }

  return true;
}

function deepArrayCompare(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const element1 = array1[index];
    const element2 = array2[index];

    if (!areValuesEqual(element1, element2)) {
      return false;
    }
  }

  return true;
}

function areEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return deepArrayCompare(value1, value2);
  }

  if (typeof value1 === "object" && typeof value2 === "object") {
    return deepObjectCompare(value1, value2);
  }

  return (
    (Number.isNaN(value1) && Number.isNaN(value2)) ||
    (value1 === null && value2 === null) ||
    value1 === value2
  );
}

let obj1 = {
  hello: 1,
  bye: [1, 2, 3],
  hi: {
    a: 1,
    b: 2,
  },
};

let obj2 = {
  hello: 1,
  bye: [1, 2, 3],
  hi: {
    a: 1,
    b: 2,
  },
};

console.log(deepObjectCompare(obj1, obj2));
