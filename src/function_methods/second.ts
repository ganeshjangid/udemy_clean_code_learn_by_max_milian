interface createUserProps {
  email: string;
  password: string;
}

const saveUserData1 = createUser({
  email: "abc@gmail.com",
  password: "abc@123",
});
console.log(saveUserData1);

function createUser(data: createUserProps) {
  const { email, password } = data;
  const isValidInput = inputIsValid1({ email, password });
  if (!isValidInput) return showErrorMsg("Invalid Parameter");
  return saveUserInDB(email, password);
}

function inputIsValid1(data: createUserProps) {
  const { email, password } = data;
  return email && email.includes("@") && password && password.trim() !== "";
}

function showErrorMsg(msg: string) {
  console.log(msg);
}

function saveUserInDB(email: string, password: string) {
  return {
    email: email,
    password: password,
    status: 200,
    message: "Successfully Data Save!",
  };
}
