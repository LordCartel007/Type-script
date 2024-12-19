class Product {
  // properties of the product
  car: string;
  bike: string;
  truck: string;
  bus: string;

  // constructor is like the building process
  constructor(
    carName: string,
    bikeName: string,
    truckName: string,
    busName: string
  ) {
    this.car = carName;
    this.bike = bikeName;
    this.truck = truckName;
    this.bus = busName;
  }

  // method to describe the house
  describe(): string {
    return `The Fastest of them all is ${
      this.car
    } with it latest bike called  ${this.bike} and if you 
          are looking for large space buy ${this.bus ? "bus" : ""}`;
  }
}

const Product1 = new Product("HILUX", "PCX", "SUZUKI", "HAICE");

console.log(Product1.describe());
