// Method Referencing
// const person = {
//   name: "Bala",
//   talk() {
//     setTimeout(() => {
//       console.log(this.name + " is talking");
//     }, 0);
//   },
// };

// console.log("Started");
// // person.talk();

// const talking = () => {person.talk};

// talking();

// Date Class
// let x = Date.now();
// let y = Math.random() * (1 - 0.996) + 0.996;
// console.log(y);
// console.log(new Date(x * y));
// console.log(new Date().toString().slice(0, 24));

//Object Dst
// const func = () => {
//   return [1, 2, 3];
// };

// const [a, b, c] = func();

// // a = 6;

// console.log(a + b + c);

// Regex
let re = "pa";
let pattern = new RegExp(re, "g");

let string = ["pattinson", "parrot", "not-pa", "pa"];

string.filter((item) => {
  console.log(item.match(pattern).length != 0);
});
