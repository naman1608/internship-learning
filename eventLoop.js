console.log("abc");
setTimeout(
  () =>
    Promise.resolve()
      .then(() => console.log("resolved"))
      .then(() => console.log("resolved2")),
  0
);
Promise.resolve().then(() => console.log("resolved3"));
setTimeout(() => console.log("ahehaha"), 0);
console.log("def");
setTimeout(
  () =>
    Promise.resolve()
      .then(() => console.log("resolved6"))
      .then(() => console.log("resolved7")),
  0
);

console.log("abc");
Promise.resolve()
  .then(() => console.log("resolved5"))
  .then(() => console.log("resolved10"));
Promise.resolve()
  .then(() => setTimeout(() => console.log("aeaa"), 0))
  .then(() => console.log("resolved9"))
  .then(() => console.log("resolved4"));
Promise.resolve()
  .then(() => console.log("resolve8"))
  .then(() => console.log("resolved11"));
console.log("def");
