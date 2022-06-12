import Author from "../author/model";
import Category from "../category/model";
import Film from "./model";
import { Op } from "sequelize";
import { iteratorSymbol } from "immer/dist/internal";
import Authentication from "../../utils/authentication";
type TypeArgs = {
  categoryId: number;
  offset?: number;
  search?: string;
};

export async function GetAllLimit(parent: any, args: TypeArgs, context: any) {
  try {
    const idCategory =
      args.categoryId != 0 ? { categoryId: args.categoryId } : {};
    const search = args.search
      ? { name: { [Op.like]: `%${args.search}%` } }
      : {};

    const result = await Film.findAll({
      where: {
        ...idCategory,
        ...search,
      },
      include: [
        { model: Author, as: "author" },
        { model: Category, as: "category" },
      ],
      limit: 12,
      offset: args.offset || 0,
      order: [["id", "DESC"]],
    });

    return result;
  } catch (e) {
    return e;
  }
}

export async function GetAll(parent: any, args: TypeArgs, context: any) {
  try {
    const result = await Film.findAll({
      include: [
        { model: Author, as: "author" },
        { model: Category, as: "category" },
      ],
      order: [["id", "DESC"]],
    });

    return result;
  } catch (e) {
    return e;
  }
}

export async function Get(parent: any, args: any, context: any) {
  try {
    const authorizttion=Authentication.decodeToken(context.auth,["user","admin"])
    console.log(authorizttion)
    if(!authorizttion){
      return false;
    }
    
  
    const result = await Film.findOne({
      where: {
        id: args.id,
      },
      include: [
        { model: Author, as: "author" },
        { model: Category, as: "category" },
      ],
    });
    return result;
  } catch (e) {
    return e;
  }
}

export async function Create(parent: any, args: any, context: any) {
  const authorizttion=Authentication.decodeToken(context.auth,["admin"])
  if(!authorizttion){
    return false;
  }
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
  const authorizttion=Authentication.decodeToken(context.auth,["admin"])
  if(!authorizttion){
    return false;
  }
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
  const authorizttion=Authentication.decodeToken(context.auth,["admin"])
  if(!authorizttion){
    return false;
  }
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
