const { PrismaClient} = require('@prisma/client')
const imageKit = require('../libs/imageKit')

const prisma = new PrismaClient()

module.exports = {
    imageUpload : async(req,res) => {
        try{
            const convertToString = req.file.buffer.toString('base64')
            const {judul,deskripsi} = req.body

            const uploadFile = await imageKit.upload({
                fileName: req.file.originalname,
                file: convertToString
            })
            const saveToDatabase = await prisma.newsInfo.create({
                data:{
                    judul:judul,
                    deskripsi:deskripsi,
                    imageLink: uploadFile.url.toString()
                }
            })

            return res.status(200).json({
                status:true,
                message:"Success to save data",
                data:{
                    judul : judul,
                    deskripsi : deskripsi,
                    name : uploadFile.name,
                    url : uploadFile.url,
                    type : uploadFile.type
                }
            })

        }
        catch(err){
            throw err
        }
    },
    getAllData : async(req,res)=>{
        try{
            const response = await prisma.newsInfo.findMany({})
            // const data = await response.data
            return res.status(200).json({
                status:true,
                message:"success",
                data: {response}
            })
        }
        catch (err){
            throw err
        }
    },
    getDetailData : async(req,res)=>{
        try{
            const id = parseInt(req.params.id)
            const response = await prisma.newsInfo.findFirst({
                where:{
                    id:id
                }
            })
            return res.status(200).json({
                status:true,
                message:"success",
                data:{
                    response
                }
            })
        }
        catch(err){
            throw err
        }
    },
    deleteData: async(req,res) =>{
        try{
            const id = parseInt(req.params.id)
            const response = await prisma.newsInfo.delete({
                where:{
                    id:id
                }
            })
            return res.status(200).json({
                status: true,
                message:"success"
            })
        }
        catch(err){
            throw err
        }
    },
    editData : async(req,res)=> {
        const id = parseInt(req.params.id)
        const {judul,deskripsi} = req.body
        const updatedNews = await prisma.newsInfo.update({
            data: {
              judul,
              deskripsi,
            },
            where: { id: parseInt(id) }
          });
        return res.status(200).json({
            status:true,
            message:"success",
            data:updatedNews
        })
    }
}