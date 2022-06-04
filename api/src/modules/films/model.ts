import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import sequelize from "../../config/db/db";
class Film extends Model<InferAttributes<Film>, InferCreationAttributes<Film>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare categoryId: number;
  declare description: string;
  declare publicYear: number;
  declare authorId: number;
}


Film.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
    //   allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    publicYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER.UNSIGNED,
    //   allowNull: false,
    },
  },
  { sequelize, tableName: "films" }
);

export default Film
