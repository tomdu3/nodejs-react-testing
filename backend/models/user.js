'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true, // Enforcing unique constraint on email
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true, // Enforcing unique constraint on username
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    } 
  }, 
 {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        if (!user.username) {
          user.username = user.email;
        }
      },
      beforeUpdate: (user, options) => {
        if (!user.username) {
          user.username = user.email;
        }
      }
    }
  });
  return User;
};