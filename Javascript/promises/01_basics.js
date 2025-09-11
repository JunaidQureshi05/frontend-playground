let arr = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  }),
  Promise.resolve(1),
  Promise.reject("Eerr"),
];

Promise.any(arr).then(console.log).catch(console.log);
