class User {
  constructor() {}
}

const admin = new User();

// Database class
class PostGresSQLDatabase {
  constructor() {}
  //Todo: Need to be implements later
}

const connection = new PostGresSQLDatabase();

class DiskStorage {
  private storePath = "";
  constructor(storageDirectory: string) {
    this.storePath = storageDirectory;
    this.testFunction();
  }

  public testFunction() {
    return this.testFunction2();
  }

  public testFunction2() {
    return "Hello World";
  }
}

const diskStorage = new DiskStorage("test");
diskStorage.testFunction();
