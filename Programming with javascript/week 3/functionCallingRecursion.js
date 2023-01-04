let counter = 3;
function exampel() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  exampel();
}
exampel();
