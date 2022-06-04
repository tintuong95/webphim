import { InferAttributes, Model, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import sequelize from "../../config/db/db";

class Author extends Model<
  InferAttributes<Author>,
  InferCreationAttributes<Author>
> {
    declare id :CreationOptional<Number>;
    declare name:string;
}

Author.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    }
},{sequelize,tableName:"Authors"})


export default Author