import Authentication from "../../utils/authentication";
import Film from "../films/model";
import Author from "./model";

//get author by id
async function get(parent: any, args: any, context: any) {
  try {
    const result = await Author.findOne({
      where: { id: args.id },
      include:{model:Film,as:"film"}
    });
    if (result) {
      return result;
    } else {
      return "Not found";
    }
  } catch (e: any | undefined) {
    throw new Error(e);
  }
}

//get author all
async function gets(parent: any, args: any, context: any) {
  try {
    const result = await Author.findAll({
        include:{model:Film,as:"film"}
    });
    if (result) {
      return result;
    } else {
      throw new Error("Not found");
    }
  } catch (e: any | undefined) {
    throw new Error(e);
  }
}

//create author

async function create(parent: any, args: any, context: any) {
  const authorizttion=Authentication.decodeToken(context.auth,["admin"])
  if(!authorizttion){
    return false;
  }
  try {
    const result = await Author.create({
      ...args,
    });
    if (result) {
      return "Create success";
    } else {
      throw new Error("Create fail");
    }
  } catch (e: any | undefined) {
    throw new Error(e);
  }
}

//update author
async function update(parent: any, args: any, context: any) {
  const authorizttion=Authentication.decodeToken(context.auth,["admin"])
  if(!authorizttion){
    return false;
  }
  try {
    const result = await Author.findOne({
      where: { id: args.id },
    });

    if (result) {
      result.update({
        ...args,
      });
      result.save();
      return "Update success";
    } else {
      throw new Error("Update fail");
    }
  } catch (e: any | undefined) {
    throw new Error(e);
  }
}

async function remove(parent: any, args: any, context: any) {
  const authorizttion=Authentication.decodeToken(context.auth,["admin"])
  if(!authorizttion){
    return false;
  }
  try {
    const result = await Author.findOne({
      where: { id: args.id },
    });

    if (result) {
      result.destroy();
      return "Delete succes";
    } else {
      throw new Error("Delete fail");
    }
  } catch (e: any | undefined) {
    throw new Error(e);
  }
}

export { get, gets, create, update, remove };
