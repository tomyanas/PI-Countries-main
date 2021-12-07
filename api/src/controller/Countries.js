const {Country, Activities} = require('../db')
const axios = require('axios');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const obtenerCountries = async  (req, res, next) => {
  
  try {
    
   const name = req.query.name 

     //console.log(req.query.name)

      if (!name) {  

            const getApi = await axios.get("https://restcountries.com/v3/all")
           
            
            const newbase = getApi.data.map(country => { 
              Country.findOrCreate({
                where: {

                id: country.cca3,
                name: country.name.common,
                flag: country.flags[0],
                continent: country.continents[0],
                capital: country.capital ? country.capital[0] : null,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                },
            })
          })
          const baseDatos = await Country.findAll() 
          // console.log(baseDatos)
          //res.send(baseDatos) 
          //console.log(Activities)

          if (baseDatos.length > 0) { 
            res.send(baseDatos)
            //console.log(baseDatos)
          } 
          }
          
          // name = name[0].toUpperCase() + name.slice(1); 
          if (name) {
        const newname = name[0].toUpperCase() + name.slice(1);

        let countryByname = await Country.findAll({
          
          where: {
            name: {
              [Op.like] : `%${newname}%`,
            }
          }
        })

        if (countryByname.length === 0) {
          return res.status(404).send('Error: Name of country is invalid')
        } else {
         return res.json(countryByname)
        }
        
    
    } }catch (error) {
      next(error)
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
 
  if (countryByIdWithActivities.length > 0) {
    res.send(countryByIdWithActivities)
  } else {
    res.status(404).send('Error: ID Country not found')
  }
    
          } catch (error) {
            next(error);
            
          }
        };             
            
            
            module.exports = {
                obtenerCountries, 
                obtenerPorId,       
            } 