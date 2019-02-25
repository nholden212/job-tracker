'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    linkedInURL: {
      type: DataTypes.STRING
    }
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Contact.belongsTo(models.Company, {
      foreignKey: "companyId",
      onDelete: "CASCADE"
    });
    Contact.hasMany(models.Activity, {
      foreignKey: "activityId",
      as: "activity"
    });
  };
  return Contact;
};