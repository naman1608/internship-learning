let range = {
  from: 1,
  to: 10,
  step: 2,
};

range[Symbol.iterator] = function() {

  return {
    current: this.from,
    last: this.to,
    step: this.step,

    next() {
      if (this.current <= this.last) {
        let oldValue = this.current;
        this.current += this.step;
        return { done: false, value: oldValue };
      } else {
        return { done: true };
      }
    }
  };
};

for (let num of range) {
  console.log(num);
}
