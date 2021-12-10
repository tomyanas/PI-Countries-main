const {Country, Activities} = require('../db')
const axios = require('axios');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


 const obtenerCountries = async  (req, res) => {
   const name = req.query.name 
   
  try {
    
  
    if (name) { 
        const newname = name[0].toUpperCase() + name.slice(1);
    
        let countryByname = await Country.findAll({
          
          where: {
            name: {
              [Op.like] : `%${newname}%`,
            }
          }
        })
        res.status(200).json(countryByname)}
        if (!name){ 
        const baseDatos = await Country.findAll() 
        
        if (baseDatos.length > 0) {
          res.status(200).json(baseDatos)
         } else {
           return res.status(400).json({message: 'dataBase not found!!'})
         }
        }
    }catch (error) {
      console.log(error.message)
    }

    
  };
  
  const obtenerPorId = async  (req, res, next) => {
    try {
      const baseDatos = await Country.findAll()   
      const idCountry = req.params.id
      const newId = idCountry.toUpperCase()
      
        let countryByIdWithActivities = await Country.findAll({
           where: {
             id: newId
                },  
           include: [{
             model: Activities,
             as: 'activities'
              }]      
          })
 
        if (countryByIdWithActivities.length === 0) {
          return res.status(404).send('Error: Country not found')
         } else {
          return res.status(200).json(countryByIdWithActivities)
        }
          
        } catch (error) {
            next(error);
        }
};               




     module.exports = {
         obtenerCountries, 
         obtenerPorId,       
     } 
 
      

     
     
     
    