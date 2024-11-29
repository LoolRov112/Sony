class Product {
  constructor(name, year, description, price, src) {
    this.id = this.id = Math.floor(Math.random() * 1001);
    this.setName = name;
    this.setYear = year;
    this.setDesc = description;
    this.setPrice = price;
    this.setSrc = src;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getYear() {
    return this.year;
  }

  get getDesc() {
    return this.description;
  }
  get getPrice() {
    return this.price;
  }
  get getSrc() {
    return this.src;
  }

  set setName(name) {
    if (name.length <= 2) alert("Name must be at least 2 characters long.");
    else if (!/^[a-zA-Z0-9\s-]+$/.test(name))
      alert("Name can only contain letters and numbers.");
    else this.name = name;
  }

  set setYear(year) {
    const currentYear = new Date().getFullYear();
    const yearRegex = /^(194[6-9]|19[5-9]\d|20\d\d|20\d\d)$/;
    if (yearRegex.test(year) && year >= 1946 && year <= currentYear)
      this.year = year;
    else {
      alert(`Year must be between 1946 and ${currentYear}.`);
    }
  }

  set setDesc(description) {
    if (/\b\w+\b\s+\b\w+\b/.test(description)) {
      this.description = description;
    } else {
      alert("Description must be at least two words.");
    }
  }

  set setPrice(price) {
    if (price >= 0 && price <= 5000) {
      this.price = price;
    } else {
      alert("Price must be between 0 and 5000.");
    }
  }

  set setSrc(src) {
    if (/\.(jpeg|jpg|gif|png|webp)$/.test(src)) {
      this.src = src;
    } else {
      alert(
        "Invalid image source format. Must end with .jpeg, .jpg, .gif, or .png."
      );
    }
  }

  toString() {
    return `Name: ${this.getName}, Year: ${this.getYear}, Description: ${this.getDesc}, Price: ${this.getPrice}`;
  }
}

class Cart {
  constructor() {
    this.products = [];
    this.sum = 0;
  }

  addToSum(product) {
    this.sum += product.getPrice;
  }

  addToCart(product) {
    if (this.sum + product.getPrice <= 5000) {
      this.addToSum(product);
      this.products.push(product);
    } else {
      alert("You have exceeded the maximum limit of $5000.");
      this.sum = 0;
      this.products = [];
    }
  }

  get getSum() {
    return this.sum;
  }

  getValueOfAllTheStore(...product) {
    let sum = 0;
    for (const x of product) {
      sum += x.getPrice;
    }
    return sum;
  }
}
