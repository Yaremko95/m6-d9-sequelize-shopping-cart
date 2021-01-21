module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { timestamps: false }
  );
  Cart.associate = (models) => {};
  return Cart;
};
