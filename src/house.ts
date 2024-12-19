class House {
  // properties of the house
  address: string;
  rooms: number;
  hasGarage: boolean;

  // constructor is like the building process
  constructor(houseAddress: string, numberOfRooms: number, garage: boolean) {
    this.address = houseAddress;
    this.rooms = numberOfRooms;
    this.hasGarage = garage;
  }

  // method to describe the house
  describe(): string {
    return `House at ${this.address} has  ${this.rooms} rooms  ${
      this.hasGarage ? " and a garage" : ""
    }`;
  }
}

// building different house using the constructor
const house1 = new House("123 Main st", 3, true);
const house2 = new House("456 Park Ave", 4, false);

console.log(house1.describe());
