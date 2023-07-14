const author = require('./../models/Author')
module.exports = {
    index : async (req,res) =>{
        try{
            const data = await author.find({})

            return res.status(200).json({"state":true,"data":data })
        }catch(err){
            return res.status(503).json({"state":false, "error":err})
        }

    },
    save : async(req,res)=>{
        const {id,name} = req.body

        return res.status(200).json({"state":true,"data":{"id":id,"name":name}})
    }
}