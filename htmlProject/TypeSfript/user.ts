class Person {
  private _id: string;
  private _name: string;
  private _email: string;
private 
  constructor(name: string, email: string) {
    this._id = `${name} ${Math.floor(Math.random() * 1001)}`;
    this.name = name;
    this.email = email;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  set name(name: string) {
    if (/^[a-z]{2,}$/i.test(name)) {
      this._name = name;
    } else {
      alert("Name must be at least 2 letters and only contain letters.");
    }
  }

  set email(email: string) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this._email = email;
    } else {
      alert("Invalid email format.");
    }
  }
}

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

class User1 extends Person {
  private password: string;
  private gender: Gender;

  constructor(name: string, email: string, gender: Gender) {
    super(name, email);
    this.password = this.generatePassword();
    this.gender = gender;
  }

  private generatePassword(): string {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  get getPassword(): string {
    return this.password;
  }

  get getGender(): Gender {
    return this.gender;
  }

  set setPassword(password: string) {
    const passwordRegex = /^[A-Za-z\d]{8}$/;
    if (passwordRegex.test(password)) {
      this.password = password;
    } else {
      alert(
        "Password must be at least 8 characters long and contain both letters and numbers."
      );
    }
  }

  toString(): string {
    return `User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
  }
}
const user1 = new User1("John Doe", "john.doe@example.com", Gender.Male);

const user2 = new User1("Jane Smith", "jane.smith@example.com", Gender.Female);

console.log(user1.toString());
console.log("Password:", user1.getPassword);
console.log("Gender:", user1.getGender);

console.log(user2.toString());
console.log("Password:", user2.getPassword);
console.log("Gender:", user2.getGender);
