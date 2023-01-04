class car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  turboOn() {
    console.log("Turbo mode on:");
  }
}
var car1 = new car("red", 50);
car1.turboOn();
