// Importación de los esquemas necesarios
const Assignment = require('./../models/Assignment')
const Doctor = require('./../models/Doctor')
const Office = require('./../models/Office')

module.exports = {
    // Función para obtener todas las asignaciones
    index : async (req,res) =>{
        try{
            const data = await Assignment.find({}).populate('documentDoctorId')

            return res.status(200).json({"state":true,"data":data})
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    // Función para obtener una asignación por su ID
    findByID : async(req,res)=>{
        const {id} = req.params
        try {
            const author = await Assignment.findById(id)

            return res.status(200).json({"state":true,"data":author})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }
        
    },
    // Función para guardar una nueva asignación
    save : async(req,res)=>{
        const {id_doctor} = req.params
        const {id_office} = req.params
        console.log(id_doctor)
        console.log(id_office)
        try {
            const assignment = new Assignment(req.body)
            assignment.documentDoctorId = id_doctor

            const office = await Office.findById(id_office)

            office.assignments.push(assignment)

            await office.save()

            const data = await assignment.save()

            return res.status(200).json({"state":true, "data":data})

        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }

    },
    // Función para actualizar una asignación existente
    update : async(req,res)=>{
        const {id} = req.params

        const assignment = req.body

        try {
            const data = await Assignment.findByIdAndUpdate(id, assignment)

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false, "data":error})
        }

    },
    // Función para eliminar una asignación existente
    erase : async(req,res)=>{
        const {id} = req.params

        try {
            const data = await Assignment.findByIdAndDelete(id)
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"data":error})
        }

    }
}