const Person = require('../models/Person')
const express = require('express');
const app = express();
app.use(express.json());
async function crearUsuario(req,res){
    const {id_person,number_identification, full_name, full_last_name,birthdate,sex} = req.body
        const nuevoUsuario = await Person.create({id_person,
            number_identification, full_name, full_last_name,birthdate,sex},{
                fields: ['id_person','number_identification','full_name', 'full_last_name','birthdate','sex']

            } );
       res.send(nuevoUsuario)
     
}



async function obtenerusuarios (req,res) {
const todosUsuarios = await Person.findAll()
res.json(todosUsuarios)
}

async function obtenerunusuario (req,res) {
    const {id_person} = req.params;
    const usuarioEncontrado = await Person.findOne({
        where: {
            id_person
        }
    })
    res.json(usuarioEncontrado)

}

async function actualizarusuario (req,res) {
  const {id_person} = req.params;
  const {full_name, full_last_name,birthdate,sex} = req.body;
 const personas = await Person.findAll({
      atributos: ['id_person','full_name', 'full_last_name','birthdate','sex'],
      where:{
          id_person
      }
  })
  if(personas.length>0){
      personas.forEach(async p => {
          await p.update({
            full_name, full_last_name,birthdate,sex
          })
      });

  }
  return res.json({
      mensaje: 'Usuario actualizado'
  })
}

async function eliminarusuario (req,res) {
    const {id_person} = req.params;
const usuarioEliminado = await Person.destroy({
    where:{
        id_person
    }
});
res.json({
    mensaje:`El usuario ${usuarioEliminado} se ha eliminado correctamente`
})
}

module.exports =  {crearUsuario,eliminarusuario, obtenerusuarios, obtenerunusuario,  actualizarusuario };