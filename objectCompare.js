function deepObjectCompare(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (const key of obj1Keys) {
    const obj1Value = obj1[key];
    const obj2Value = obj2[key];

    if (Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
      if (!deepArrayCompare(obj1Value, obj2Value)) {
        return false;
      }
    } else if (typeof obj1Value !== typeof obj2Value) {
      return false;
    } else if (typeof obj1Value === "object" && typeof obj2Value === "object") {
      if (!deepObjectCompare(obj1Value, obj2Value)) {
        return false;
      }
    } else if (nanNullCheck(obj1Value, obj2Value)) {
      continue;
    } else if (obj1Value !== obj2Value) return false;
  }
  return true;
}

function deepArrayCompare(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    let element1 = array1[index];
    let element2 = array2[index];

    if (Array.isArray(element1) && Array.isArray(element2)) {
      if (!deepArrayCompare(element1, element2)) {
        return false;
      }
    }

    if (typeof element1 === "object" && typeof element2 === "object") {
      if (!deepObjectCompare(element1, element2)) {
        return false;
      }
    }

    if (
      (Number.isNaN(element1) && Number.isNaN(element2)) ||
      (element1 === null && element2 === null)
    ) {
      continue;
    }

    return element1 === element2;
  }
}

function nanNullCheck(element1, element2) {
  return (
    (Number.isNaN(obj1Value) && Number.isNaN(obj2Value)) ||
    (obj1Value === null && obj2Value === null)
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
