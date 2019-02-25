'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postingURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postingDate: {
      type: DataTypes.DATE
    }
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
    Job.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Job.belongsTo(models.Company, {
      foreignKey: "companyId",
      onDelete: "CASCADE"
    });
    Job.hasMany(models.Contact, {
      foreignKey: "jobId",
      as: "contacts"
    });
    Job.hasMany(models.Activity, {
      foreignKey: "jobId",
      as: "activity"
    });
  };
  return Job;
};