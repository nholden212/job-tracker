'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Activity, {
      foreignKey: "userId",
      as: "activity"
    });
    User.hasMany(models.Company, {
      foreignKey: "userId",
      as: "companies"
    });
    User.hasMany(models.Contact, {
      foreignKey: "userId",
      as: "contacts"
    });
    User.hasMany(models.Job, {
      foreignKey: "userId",
      as: "jobs"
    });
    User.hasMany(models.Resume, {
      foreignKey: "userId",
      as: "resumes"
    });
  };
  return User;
};