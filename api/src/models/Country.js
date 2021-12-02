const { DataTypes, UUIDV4, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/* 
NECESITO ID, NOMBRE, IMAGEN DE LA BANDERA, CONTINENTE , CAPITAL, SUBREGION, AREA, POBLACION, 

*/

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: { 
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,      
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
