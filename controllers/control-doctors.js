// Importación de los esquemas necesarios
const Doctor = require('./../models/Doctor')

module.exports = {
    // Función para obtener todas las asignaciones
    index : async (req,res) =>{
        try{
            const data = await Doctor.find({}).populate('speciality')

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    // Función para obtener una asignación por su ID
    findByID : async(req,res)=>{
        const {id} = req.params
        try {
            const author = await Doctor.findById(id)

            return res.status(200).json({"state":true,"data":author})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
        
    },
    // Función para guardar una nueva asignación
    save : async(req,res)=>{
        const doctor = new Doctor(req.body)
        try {
            const data = await doctor.save()
            return res.status(200).json({"state":true, "data":data})
        } catch ( error ){
            return res.status(500).json({"state":false, "data":error})
        }

    },
    // Función para actualizar una asignación existente
    update : async(req,res)=>{

        const {id} = req.params
  

        const doctor = req.body

        try {
            const data = await Doctor.findByIdAndUpdate(id, doctor)

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }

    },
    // Función para eliminar una asignación existente
    erase : async(req,res)=>{
        const {id} = req.params

        try {
            const data = await Doctor.findByIdAndDelete(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"data":error})
        }

    }
}