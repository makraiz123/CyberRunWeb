export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  shirtSize: string;

  constructor(email: string, password: string, firstName: string, lastName: string, address: string, phone: string, shirtSize: string) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.shirtSize = shirtSize;
  }
}
