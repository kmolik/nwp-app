module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("nwp_users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: 'nwp_users',
    timestamps: false
  }
  )

  return User;
};
