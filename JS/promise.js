// Workout

// const promise = new Promise((resolve, reject) => {
//   let resTime = Math.random() * 10000;
//   let rejTime = Math.random() * 10000;

//   console.log(
//     `Started to Fetch with resolve time -> ${resTime} & reject time -> ${rejTime}`
//   );

//   let resolver = setTimeout(() => {
//     clearTimeout(rejecter);
//     resolve(200);
//   }, resTime);

//   let rejecter = setTimeout(() => {
//     clearTimeout(resolver);
//     reject(new Error("400 Bad Request"));
//   }, rejTime);
// });

// promise
//   .then(
//     (value) => {
//       console.log("Resolved: " + value);
//     },
//     (reason) => {
//       console.log("Rejected: " + reason);
//     }
//   )
//   .catch((err) => {
//     console.log("Error: " + err.message);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

//Exercise - Create a delay function

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

let time = 3000;
console.log("Started");

//.THEN
delay(time).then(() => {
  console.log(`This got runned after time -> ${time}`);
});

//ASYNC - AWAIT
async function temp() {
  let result = await delay(time);

  console.log(`This got runned after time -> ${time}`);
}
temp();
