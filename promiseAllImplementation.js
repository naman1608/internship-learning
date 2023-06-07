Promise.all = async function (promises) {
  if (promises.length === 0) {
    return new Promise((resolve, reject) => resolve([]));
  }

  return new Promise((resolve, reject) => {
    let settledValues = new Array(promises.length).fill(null);
    let numberResolved = 0;

    promises.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise
          .then((value) => {
            settledValues[index] = value;
            numberResolved++;
            if (numberResolved === promises.length) {
              resolve(settledValues);
            }
          })
          .catch((error) => reject(error));
      }
      else{
        settledValues[index] = promise;
        numberResolved++;
      }
    });
  });
};




Promise.all([
  Promise.resolve(3),
  new Promise((resolve, reject) => resolve(5)),
  new Promise((resolve, reject) => {
    resolve(4);
  }),
  10,
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

Promise.all([
  Promise.resolve(3),
  new Promise((resolve, reject) => resolve(5)),
  Promise.reject("error"),
  new Promise((resolve, reject) => {
    resolve(3);
  }),
  new Promise((resolve, reject) => {}),
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
