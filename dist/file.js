"use strict";
class Product {
  constructor(carName, bikeName, truckName, busName) {
    this.car = carName;
    this.bike = bikeName;
    this.truck = truckName;
    this.bus = busName;
  }
  describe() {
    return `The Fastest of them all is ${
      this.car
    } with our latest bike called ${this.bike} and if you 
          are looking for large space buy our new ${this.bus ? "Coaster" : ""}`;
  }
}
const Product1 = new Product("HILUX", "PCX", "SUZUKI", "HAICE");
console.log(Product1.describe());
