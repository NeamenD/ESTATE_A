import bcrypt from "bcrypt";
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  //hash password

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  //create a new user and save to db
  //db operations
  //   console.log(req.body);
};

export const login = (req, res) => {
  //db operations
};
export const logout = (req, res) => {
  //db operations
};
