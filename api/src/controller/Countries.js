const {Country, Activities} = require('../db')
const axios = require('axios');


const obtenerCountries = async  (req, res, next) => {
  
  try {
    
   const name = req.query.name 

     //console.log(req.query.name)

      if (!name) {  

            const getApi = await axios.get("https://restcountries.com/v3/all")
           
            
            const formateo = getApi.data.map(country => { 
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
          console.log(Activities)

          if (baseDatos.length > 0) { 
            res.send(baseDatos)
          } else {
            concatenacion = [...getApi.data , ...baseDatos];
            res.send(concatenacion)
          }
          }
          
          // name = name[0].toUpperCase() + name.slice(1); 
          if (name) {
        const getApi = await axios.get(`https://restcountries.com/v3/name/${name}`)
        const newname = name[0].toUpperCase() + name.slice(1);
        const formateo = getApi.data.map(country => { 
          //newname = name[0].toUpperCase() + name.slice(1);
          if (country.name.common.includes(newname)) 
          
          return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : null,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
          }
        })
        
        const baseDatos = await Country.findAll()
        
        if (baseDatos) {
          res.send(formateo)
        } else {
          concatenacion = [...getApi.data , ...baseDatos];
          res.send(concatenacion)
        }
      }  
    
    } catch (error) {
      next(error)
    }
    
  };
  
  const obtenerPorId = async  (req, res, next) => {
    try {
      const getApiId = await axios.get(`https://restcountries.com/v3/alpha/${req.params.id}`)
      const baseDatos = await Country.findAll()
     

      const idCountry = req.params.id
      const newId = idCountry.toUpperCase()
      
      console.log(Activities)
      const activityWithCountry = await Activities.findAll({
        include: {
          model: Country,
          where: {
            id: newId
          }
        }
      })
            const formateo = getApiId.data.map(country => {
             const newId = idCountry.toUpperCase()
              if (country.cca3.includes(newId) ) {
                return {
                  id: country.cca3,
                  name: country.name.common,
                  flag: country.flags[0],
                  continent: country.continents[0],
                  capital: country.capital ? country.capital[0] : null,
                  subregion: country.subregion,
                  area: country.area,
                  population: country.population,
                  activity: activityWithCountry,   
            }}})
            if (baseDatos) {
              res.send(formateo)
            } else {
              concatenacion = [...getApi.data , ...baseDatos];
              res.send(concatenacion)
            }
          } catch (error) {
            next(error);
            
          }
        }; 

        //---------------------------------------------------------
        
   /*      const getApiInfo = async  () => {
          const getApi = await axios.get("https://restcountries.com/v3/all")
          const apiInfo = getApi.data.map(country => {
            return {
              id: country.cca3, 
              name: country.name.common,
              flag: country.flags[0],
              continent: country.capital,
              capital: country.capital[0], 
              subregion: country.subregion,
              area: country.area,
              population: country.population,
            }
          })
          
          return(apiInfo)
        }
        
        const getDbInfo = async  () => {
          const baseDatos = await Country.findAll( 
            {
              include: {
                model: Activity,
                attributes: [ 'name', 'difficulty', 'duration', 'season'],
                through: {
                  attributes: []
                }
              }
            })
          return(baseDatos)
          }
          
          const getAllCountries = async  () => {
            const apiInfo = await getApiInfo();
            const baseDatos = await getDbInfo();
            const concatenacion = [...apiInfo , ...baseDatos];
            return(concatenacion)
          }
          
          const obtenerCountries = async  (req, res) => {
            const name = req.query.name;
            const countries = await getAllCountries();
            if (name) {
              let newname = name[0].toUpperCase() + name.slice(1);
              const countryName = await countries.filter(country => country.name.includes(newname));
              countryName.length > 0 ? 
              res.status(200).send(countryName) : 
              res.status(404).send(`No countries found with the name ${name}`)      
            } else {
              res.status(200).send(countries)
            }
          } */

        
            

            
            
            
            module.exports = {
                obtenerCountries, 
                obtenerPorId,       
            } 