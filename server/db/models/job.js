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
  };
  return Job;
};