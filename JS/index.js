const person = {
  name: "Bala",
  talk() {
    setTimeout(() => {
        console.log(this.name + " is talking");
    }, 0);
  }
};

console.log("Started");
// person.talk();

const talking = person.talk;

talking();
