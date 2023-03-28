function sumNum(n1,n2,n3) {
  return n1+n2+n3;
}
console.log(sumNum(3,8,2));

class car {
  constructor() {
    this.numDoors = 2; // Valor inicial 2
  }

  addDoor() {
    this.numDoors++; // Incrementa 1
  }
}

// Crear objeto
const myCar = new car();

// Añadir una puerta al coche cada vez
myCar.addDoor();
myCar.addDoor();
myCar.addDoor();

console.log("Mi coche tiene " + myCar.numDoors + " puertas.");
