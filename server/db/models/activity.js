'use strict';
module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
    Activity.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Activity.belongsTo(models.Company, {
      foreignKey: "companyId",
      onDelete: "CASCADE"
    });
    Activity.belongsTo(models.Contact, {
      foreignKey: "contactId",
      onDelete: "CASCADE"
    });
    Activity.belongsTo(models.Job, {
      foreignKey: "jobId",
      onDelete: "CASCADE"
    });
    Activity.belongsTo(models.Resume, {
      foreignKey: "resumeId",
      onDelete: "CASCADE"
    });
  };
  return Activity;
};