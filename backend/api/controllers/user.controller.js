export const getUsers = async (req, res) => {
  //   console.log("it works");
  try {
  } catch (error) {
    console.log(error);
    es.status(500).json({ message: "Failed to get users!" });
  }
};

export const getUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    es.status(500).json({ message: "Failed to get user!" });
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    es.status(500).json({ message: "Failed to update users!" });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    es.status(500).json({ message: "Failed to delete users!" });
  }
};
