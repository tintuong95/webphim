import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../../config/db/db";


class Category extends Model <InferAttributes<Category>,InferCreationAttributes<Category>>{
    declare id:CreationOptional<number>;
    declare name:string;
}

Category.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    sequelize,tableName:"categorys"
})



export default Category