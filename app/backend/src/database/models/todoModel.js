module.exports = (sequelize, DataTypes) =>{
  const Todos = sequelize.define('todos', {
    Nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Data: {
      allowNull: false,
      default: DataTypes.NOW,
      type: DataTypes.DATE,
    },
    Hora: {
      allowNull: false,
      type: DataTypes.TIME,
    },
    Título: {
      allowNull: false,
      type: DataTypes.STRING({ length: 100 }),
    }
  })

  return Todos;
}