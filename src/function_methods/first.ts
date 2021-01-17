interface saveUserProps {
  email: string;
  password: string;
}

function saveUserData(user: saveUserProps) {
  const { email, password } = user;
  return {
    id: Math.random().toString(),
    email: email,
    password: password,
  };
}

const userSave = { email: "abc@gmail.com", password: "123@" };
saveUserData(userSave);

// Better Solutions

class UserSave {
  private email;
  private password;
  private id;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }

  save() {
    return "Save user data";
  }
}
const userData = new UserSave("abc@gamil.com", "123@");
console.log(userData.save());
