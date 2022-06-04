import Author from "../author/model";
import Category from "../category/model";
import Film from "./model";

export async function GetAll(parent: any, args: any, context: any) {
  try {
    const result = await Film.findAll({
        include:[
            {model:Author,through: { attributes: [] }},
            {model:Category,through: { attributes: [] }}
        ]
    });
    return result;
  } catch (e) {
    return e;
  }
}

export async function Get(parent: any, args: any, context: any) {
  try {
    const result = await Film.findOne({
      where: {
        id: args.id,
      },
      include:[
        {model:Author,as:"author"},
        {model:Category,as:"category"}
    ]
    });
    return result;
  } catch (e) {
    return e;
  }
}

export async function Create(parent: any, args: any, context: any) {
  try {
    const result = await Film.create({
      ...args,
    });
    return "Create success";
  } catch (e) {
    return e;
  }
}

export async function Update(parent: any, args: any, context: any) {
  try {
    const result = await Film.findOne({
      where: { id: args.id },
    });
    if (result) {
      result.update({
        ...args,
      });
      result.save();
      return "Update success";
    } else {
      throw new Error("Update Fail!");
    }
  } catch (e) {
    return e;
  }
}

export async function Remove(parent: any, args: any, context: any) {
  try {
    const result = await Film.findOne({ where: { id: args.id } });
    if (result) {
      result.destroy();
      return "Remove success!";
    } else {
      throw new Error("Not found");
    }
  } catch (e) {
    return e;
  }
}
