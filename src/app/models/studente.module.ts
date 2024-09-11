export class Studente {
  id: number;
  name: string;
  email: string;
  address: { city: string };

  constructor(
    id: number,
    name: string,
    email: string,
    address: { city: string }
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }
}
