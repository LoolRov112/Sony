class User {
  constructor(email, name) {
    this._id = `${name} ${Math.floor(Math.random() * 1001)}`;
    this.setName = name;
    this.setEmail = email;
    this.setPassword = this.generatePassword();
  }

  generatePassword() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  set setName(name) {
    if (/^[a-z]{2,}$/i.test(name)) {
      this._name = name;
    } else {
      alert("Name must be at least 2 letters and only contain letters.");
    }
  }

  set setEmail(email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this._email = email;
    } else {
      alert("Invalid email format.");
    }
  }

  set setPassword(password) {
    const passwordRegex = /^[A-Za-z\d]{8}$/;
    if (passwordRegex.test(password)) {
      this._password = password;
    } else {
      alert(
        "Password must be at least 8 characters long and contain both letters and numbers."
      );
    }
  }

  toString() {
    return `User ID: ${this._id}, Name: ${this._name}, Email: ${this._email}`;
  }
}

function getThePassword() {
  let name = document.getElementById("name").querySelector("input").value;
  let email = document.getElementById("email").querySelector("input").value;
  if (name && email) {
    const user = new User(email, name);
    document.querySelector(".wrapper").innerHTML = `
            <form action="../index.html"> 
                <div class="field">
                    <h3 id="newPass">Your Password is: <span style="color:#4667c0">${user.password}</span></h3>
                </div>
                <div class="field">
                <input type="password" required>
                <label>Password</label>
                </div>
                <div class="field">
                    <input type="submit" value="Submit">
                </div>
            </form>
        `;
    localStorage.setItem("email", user.email);
    localStorage.setItem("name", user.name);
  } else {
    alert("Please enter both name and email.");
  }
}
