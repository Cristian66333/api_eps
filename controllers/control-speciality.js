// Importación de los esquemas necesarios
const Speciality = require('./../models/Speciality')

module.exports = {
    // Función para obtener todas las asignaciones
    index : async (req,res) =>{
        try{
            const data = await Speciality.find({})

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    // Función para obtener una asignación por su ID
    findByID : async(req,res)=>{
        const {id} = req.params
        try {
            const author = await Speciality.findById(id)

            return res.status(200).json({"state":true,"data":author})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
        
    },
    // Función para guardar una nueva asignación
    save : async(req,res)=>{
        const speciality = new Speciality(req.body)

        try {
            const data = await speciality.save()
            return res.status(200).json({"state":true, "data":data})
        } catch ( error ){
            return res.status(500).json({"state":false, "data":error})
        }

    },
    // Función para actualizar una asignación existente
    update : async(req,res)=>{
        const {id} = req.params

        const speciality = req.body

        try {
            const data = await Speciality.findByIdAndUpdate(id, speciality)

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }

    },
    // Función para eliminar una asignación existente
    erase : async(req,res)=>{
        const {id} = req.params

        try {
            const data = await Speciality.findByIdAndDelete(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"data":error})
        }

    }
}