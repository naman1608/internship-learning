async function handle(promises) {
  try {
    const data = await Promise.all(promises);
    return [data, undefined];
  } catch (error) {
    return [undefined, error];
  }
}

function randomCheck(){
  let randomNumber = Math.random();
  console.log(randomNumber);
  return randomNumber < 0.95;
}

async function func() {
  const promises = [];
  for (let i = 0; i < 5; i++) {
    let promise = new Promise((resolve, reject) => {
      randomCheck() ? resolve('done') : reject("error");
    });
    promises.push(promise);
  }

  const [data, error] = await handle(promises);

  if (data) {
    handleData(data);
  } else {
    handleError(error);
  }
}

function handleData(data) {
  console.log(data);
}

function handleError(error) {
  console.log(error);
}

func();
