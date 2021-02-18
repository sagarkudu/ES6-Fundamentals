class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  registerUser() {
    console.log(this.username + " is now registered.");
  }
}

class Member extends User {
  constructor(username, email, password, memberPackage) {
    //we can use this.*, but there is easier method available i.e super()
    super(username, email, password);
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username + ` is subscribed to the ` + this.package +` package`);
  }
}

let mike = new Member('mike', 'mike@gmail.com', '123', 'Deluxe');
mike.getPackage();

//we can also parent class methods here
mike.registerUser();