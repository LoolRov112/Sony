class Contact {
    constructor(fName, lName, email, number, gender) {
        this.id = Math.floor(Math.random() * 1001);
        this.setFName=fName;
        this.setLName=lName;
        this.setEmail=email;
        this.setNumber=number;
        this.setGender=gender;
    }

    get getId() {
        return this.id;
    }

    get getFName() {
        return this.fName;
    }

    set setFName(fName) {
        if (/^[a-z]{2,}$/i.test(fName)) {
            this.fName = fName;
        } else {
            alert('First name must be at least 2 letters and only contain letters.');
        }
    }

    get getLName() {
        return this.lName;
    }

    set setLName(lName) {
        if (/^[a-z]{2,}$/i.test(lName)) {
            this.lName = lName;
        } else {
            alert('Last name must be at least 2 letters and only contain letters.');
        }
    }

    get getEmail() {
        return this.email;
    }

    set setEmail(email) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.email = email;
        } else {
            alert('Invalid email format.');
        }
    }

    get getNumber() {
        return this.number;
    }

    set setNumber(number) {
        if (/^05\d{8}$/.test(number)) {
            this.number = number;
        } else {
            alert('Phone number must start with 05 followed by 8 digits.');
        }
    }

    get getGender() {
        return this.gender;
    }

    set setGender(gender) {
        this.gender = gender;
    }

    toString() {
        return `Contact ID: ${this.id}, Name: ${this.fName} ${this.lName}, Email: ${this.email}, Phone: ${this.number}, Gender: ${this.gender}`;
    }
}