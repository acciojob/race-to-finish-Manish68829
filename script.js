window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve(3), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve(4), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve(5), Math.random() * 5000 + 1000))
];

Promise.any(promises)
  .then(result => {
    document.getElementById("output").innerText = result;
  })
  .catch(error => {
    console.log(error);
  });
