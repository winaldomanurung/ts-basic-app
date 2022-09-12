import { faker } from "@faker-js/faker";

class User {
  // remember, setiap kita define property, we need to initialize it with one of these two:
  // 1. initialize in the same exact line (hardcode)
  // 2. initialize in a constructor

  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}
