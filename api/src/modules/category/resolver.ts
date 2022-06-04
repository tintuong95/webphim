import Film from "../films/model";
import Category from "./model";

//get by id
async function get(parent: any, args: any, context: any) {
  try {
    const result = await Category.findOne({
      where: { id: args.id },
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

//get all
async function gets(parent: any, args: any, context: any) {
  try {
    const result = await Category.findAll({
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

//create category
async function create(parent: any, args: any, context: any) {
  try {
    const result = await Category.create({
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

//update category
async function update(parent: any, args: any, context: any) {
  try {
    const result = await Category.findOne({
      where: { id: args.id },
    });
    if (result) {
      result.update({
        ...args,
      });
      result.save()
      return "Update success"
    } else {
      throw new Error("Update fail");
    }
  } catch (e: any | undefined) {
    throw new Error(e);
  }
}

//delete
async function remove(parent: any, args: any, context: any) {
  try {
    const result = await Category.findOne({
      where: { id: args.id },
    });

    if (result) {
      result.destroy();
      return "Delete success";
    } else {
      throw new Error("Delete fail");
    }
  } catch (e: any | undefined) {
    throw new Error(e);
  }
}

export { get, gets, update, create, remove };
