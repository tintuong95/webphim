import Authentication from "../../utils/authentication";
import HashPass from "../../utils/hasPassword";
import User from "./model";

//get by id
export async function show(parentValue: any, agrs: any, req:boolean) {
 
  console.log(req)
  const result = await User.findOne({
    where: { id: agrs.id },
  });
  if (!result) {
    throw new Error("Not found user!");
  } else {
    return result;
  }
}

//create
export async function create(parentValue: any, agrs: any) {
  const { username, password } = agrs;
  const hash = HashPass.hashPassword(password);
  const result = await User.create({
    username,
    password: hash,
    avatar: `/avatar/${Math.round(Math.random() * 10)}.png`,
  });
  if (!result) {
    throw new Error("Not create user!");
  } else {
    return Authentication.signToken(result.username);
  }
}

//signin
export async function login(parentValue: any, agrs: any) {
  const { username, password } = agrs;
  const result = await User.findOne({
    where: {
      username,
    },
  });
  if (!result) {
    throw new Error("Not found!");
  }
  const compare = HashPass.comparePassword(password, result.password);
  if (!compare) {
    throw new Error("Incorrect password!");
  }
  return Authentication.signToken(result.username);
}

//logout
export async function logoutUser(parentValue: any, agrs: any) {
  Authentication.logoutToken();
  return "Logout success!";
}
