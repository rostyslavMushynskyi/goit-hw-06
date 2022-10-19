import users from "./users.js";

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}
