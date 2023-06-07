function setIntervalTimeout(callback, interval) {
  let stop = false;
  let timeoutId;

  const intervalCallback = function () {
    callback();
    if (!stop) {
      timeoutId = setTimeout(intervalCallback, interval);
    }
  };

  timeoutId = setTimeout(intervalCallback, interval);

  const clearIntervalTimeout = function () {
    stop = true;
    clearTimeout(timeoutId);
  };

  return clearIntervalTimeout;
}

function func() {
  console.log("running");
}

const interval = 1000;
const clearIntervalTimeout = setIntervalTimeout(func, interval);

setTimeout(function () {
  clearIntervalTimeout();
  console.log("stopped");
}, 5000);
