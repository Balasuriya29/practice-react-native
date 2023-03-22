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
// let y = Math.random() * (1 - 0.996) + 0.996;
// date = new Date(Date.now() * y);
// console.log(date.toISOString().slice(0, 10));
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
// let re = "pa";
// let pattern = new RegExp(re, "g");

// let string = ["pattinson", "parrot", "not-pa", "pa"];

// string.filter((item) => {
//   console.log(item.match(pattern).length != 0);
// });

//Array
let arr = [1, 2, 3, 4];
let json = {
  ...arr.map((item) => {
    return (item.baby = "Bala");
  }),
};

let arr2 = [
  { id: 111, name: "John", age: 29 },
  { id: 112, name: "Sarah", age: 25 },
  { id: 122, name: "Kate", age: 22 },
  { id: 123, name: "Tom", age: 21 },
  { id: 125, name: "Emma", age: 24 },
];

console.log(
  arr2.reduce((obj, item) => {
    return {
      ...obj,
      [item["id"]]: item,
    };
  }, {})
);
