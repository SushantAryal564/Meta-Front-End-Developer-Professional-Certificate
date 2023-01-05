class Train {
  constructor(color, lightOn) {
    this.color = color;
    this.lightOn = lightOn;
  }
  toggleLigh() {
    this.lightOn = !this.lightOn;
  }
  lightStatus() {
    console.log("Lights On?", this.lightOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
var myFirstTrain = new Train("red", false);
var train4 = new Train("red", false);
train4.toggleLigh();
train4.lightStatus();
train4.getSelf();
train4.getPrototype();

console.log(myFirstTrain);

class HighSpeedTrain extends Train {
  constructor(color, lightOn, passengers, highSpeedOn) {
    super(color, lightOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status: ", this.highSpeedOn);
  }
  toggleLigh() {
    super.toggleLigh();
    super.lightStatus();
    console.log("Light are 100% operations");
  }
}
var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);
train5.toggleLigh();
train5.lightStatus();
train5.getPrototype();
highSpeed1.getPrototype();
