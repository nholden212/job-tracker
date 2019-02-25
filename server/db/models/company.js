'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    websiteURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Company.hasMany(models.Contact, {
      foreignKey: "companyId",
      as: "contacts"
    });
    Company.hasMany(models.Activity, {
      foreignKey: "companyId",
      as: "companies"
    });
  };
  return Company;
};