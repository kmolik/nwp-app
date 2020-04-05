module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("nwp_roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
  },
  {
    tableName: 'nwp_roles',
    timestamps: false
  }
  )

  return Role;
};
