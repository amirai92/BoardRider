import bcrpt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrpt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Amir Test",
    email: "amir@example.com",
    password: bcrpt.hashSync("123456", 10),
  },
  {
    name: "Dana Test",
    email: "dana@example.com",
    password: bcrpt.hashSync("123456", 10),
  },
];

export default users;
