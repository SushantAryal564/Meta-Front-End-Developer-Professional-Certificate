var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};
var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);
console.log("eagle can fly: ", eagle1.canFly);
console.log(eagle1.hasWings);
console.log("eagle has feathers: ", eagle1.hasFeathers);
console.log("eagle has wings:", eagle1.hasWings);

var pengiune1 = Object.create(bird);
pengiune1.canFly = false;
console.log("Penguins:", pengiune1.canFly);
console.log(pengiune1);
console.log("Eagle:", eagle1.canFly);
