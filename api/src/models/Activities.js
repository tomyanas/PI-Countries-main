const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/* 
necesito id , nombre , dificcultad (entre 1 y 5 ), duracion, temporada (verano,otono,invierno,primavera).

*/
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {

    name: {
      type: DataTypes.STRING,        
    },
    difficulty: {
        type: DataTypes.ENUM('Realy Easy', 'Easy', 'meddium', 'Hard','Realy Hard')
    },
    duration: {
        type: DataTypes.STRING
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring')
    }

  });
};


