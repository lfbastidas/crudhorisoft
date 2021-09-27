const Sequelize = require('sequelize')

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
        
        freezeTableName: true,
        timestamps: false,
     
        updatedAt: false,

  
    });

module.exports= Person;