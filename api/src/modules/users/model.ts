import {
  InferAttributes,
  Model,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

import sequelize from "../../config/db/db"

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare password: string;
  declare avatar: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull:false,
  },
  username:{
      type:DataTypes.STRING,
      allowNull:false,
  },
  password:{
      type:DataTypes.STRING,
      allowNull:false,
  },
  avatar:{
      type:DataTypes.STRING,
      allowNull:false
  }
},{
    sequelize,
    tableName:'users'
});

export default User
