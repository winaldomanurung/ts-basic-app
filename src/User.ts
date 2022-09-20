import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  // remember, setiap kita define property, we need to initialize it with one of these two:
  // 1. initialize in the same exact line (hardcode)
  // 2. initialize in a constructor

  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
