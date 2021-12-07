const {Activities, Country} = require('../db');
const axios = require('axios');

const createActivity = async (req, res, next) => {
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
        where: { name: el }
    });
    await activities.addCountry(activityCountry);
});

res.send('activty successfully created');
    } catch (error) {
        next(error);
    }

}
async function getActivites(req, res, next) {
    let act = await Activities.findAll({
        include: {
            model: Country,
            attributes: ['name', 'flag','continent','subregion' , 'area', 'population', 'capital','id' ] 
        }
    })
	res.json(act)
}

async function getActById(req, res, next) {
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
}

module.exports = {
    createActivity,
    getActivites,
    getActById

}
