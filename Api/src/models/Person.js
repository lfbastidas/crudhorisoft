const Sequelize = require('sequelize')
//const sequelize = require('../database/database')
const {sequelize} = require('../database/database')


const Person = sequelize.define('person',{
    id_person:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    number_identification:{
        type: Sequelize.NUMBER
    },
    full_name:  {
        type: Sequelize.TEXT
    },
    full_last_name:{
        type: Sequelize.TEXT
    },
    birthdate: {
        type: Sequelize.DATE
    },
    sex:{
        type: Sequelize.TEXT
    }
},
    {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
        timestamps: false,
        // If don't want createdAt
       
      
        // If don't want updatedAt
        updatedAt: false,

  
    });

module.exports= Person;