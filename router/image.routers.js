const express = require('express')
const router = express.Router()
const multer = require ('multer')()
const {imageUpload,getAllData,getDetailData,deleteData,editData} = require('../controllers/imageKit.media')

router.post('/uploadFile', multer.single('image'),imageUpload)
router.get('/getData',getAllData)
router.get('/getData/:id',getDetailData)
router.delete('/deleteData/:id',deleteData)
router.patch('/updateData/:id',editData)

module.exports = router