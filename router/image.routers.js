const express = require('express')
const router = express.Router()
const multer = require ('multer')()
const {imageUpload,getAllData,getDetailData,deleteData,editData} = require('../controllers/imageKit.media')

router.post('/uploadFile', multer.single('image'),imageUpload)
router.get('/getData',getAllData)
router.get('/getData/:id',getDetailData)
router.delete('/deleteData/:id',deleteData)
router.patch('/updateData/:id',editData)

router.get('/', (req, res) => {
    return res.json({
        message: "Hello World"
    })
})


module.exports = router