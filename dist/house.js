"use strict";
class House {
    constructor(houseAddress, numberOfRooms, garage) {
        this.address = houseAddress;
        this.rooms = numberOfRooms;
        this.hasGarage = garage;
    }
    describe() {
        return `House at ${this.address} has  ${this.rooms} rooms  ${this.hasGarage ? " and a garage" : ""}`;
    }
}
const house1 = new House("123 Main st", 3, true);
const house2 = new House("456 Park Ave", 4, false);
console.log(house1.describe());
