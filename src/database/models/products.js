import sequelize from "../sequelize";
import s from "sequelize";


const { DataTypes } = s;

const Product = sequelize.define(
  "product",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://image.url",
    },
    price: {
        type: DataTypes.INTEGER,
      },

  },
  
);

export default Product;