'use strict';
module.exports = (sequelize, DataTypes) => {
  var Resume = sequelize.define('Resume', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sendCount: {
      type: DataTypes.INTEGER
    },
    responseCount: {
      type: DataTypes.INTEGER
    },
    posResponseCount: {
      type: DataTypes.INTEGER
    }
  }, {});
  Resume.associate = function(models) {
    // associations can be defined here
    Resume.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Resume.hasMany(models.Activity, {
      foreignKey: "resumeId",
      as: "activity"
    });
  };
  return Resume;
};