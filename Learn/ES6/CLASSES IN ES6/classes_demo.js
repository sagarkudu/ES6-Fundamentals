class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    registerUser() {
        console.log(this.username +' is now registered');
    }
}

let bob = new User('bob', 'bob@gmail.com', '12345');

bob.registerUser();