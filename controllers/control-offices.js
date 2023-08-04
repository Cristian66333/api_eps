// Importación de los esquemas necesarios
const Office = require('./../models/Office')
const Doctor = require('./../models/Doctor')

module.exports = {
    // Función para obtener todas las asignaciones
    index : async (req,res) =>{

        try{
            const data = await Office.find({}).populate('assignments')

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    // Función para obtener una asignación por su ID
    findById : async (req,res) => {
        const {id} = req.params
        try {
            const data = await Office.findById(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(503).json({"state":false, "error":error})
        }
    },
    // Función para guardar una nueva asignación
    save : async (req,res) =>{
        try {
            const office = new Office(req.body)

            await office.save()

            const data = await office.save()

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
    },

}