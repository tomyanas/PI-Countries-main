const {Activities, Country} = require('../db');
const axios = require('axios');

const createActivity = async (req, res) => {
    try {
      
const {name, 
    difficulty, 
    duration,
     season, 
     countries} = req.body;

const activities = await Activities.create({
    name, 
    difficulty, 
    duration, 
    season
});
countries.forEach(async (el) => {
    let activityCountry = await Country.findOne({
        where: { 
            name: el
         }
    });
    await activities.addCountry(activityCountry);
});

res.send('activty successfully created');
    } catch (error) {
        console.log(error.message);
    }

}




async function getActivites(req, res) {
    try{ 
    let act = await Activities.findAll({
        include: {
            model: Country,
            attributes: ['name', 'flag' ,'continent','subregion' , 'area', 'population', 'capital','id' ] 
        }
    })
	res.json(act)
}catch (error){
    console.log(error.message)
}
}

async function getActById(req, res) {
    try{ 
    let countriesWithAct = await Country.findAll({
        include: {
            model: Activities,
            where:{
                id: req.params.id
            }
        }
    })
    //console.log(countriesWithAct)
    res.json(countriesWithAct)
} catch (error){
    console.log(error.message)
}

}

module.exports = {
    createActivity,
    getActivites,
    getActById

}