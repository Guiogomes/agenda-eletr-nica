module.exports = (sequelize, DataTypes) =>{
  const Todos = sequelize.define('Todos', {
    Nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Data: {
      allowNull: false,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATEONLY,
    },
    Hora: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATE,
    },
    Titulo: {
      allowNull: false,
      type: DataTypes.STRING({ length: 100 }),
    }
  }, {
    tableName: 'todos',
    timestamps: false,
  })

  return Todos;
}