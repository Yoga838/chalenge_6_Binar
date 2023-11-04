const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000
const router = require('./router/image.routers')
const bodyParser = require('body-parser')
const prisma = require('./libs/prisma')
// const swagerUi = require('swagger-ui-express')
// const swaggerJson = require('./openapi.json')

// app.delete('/delete',async(req,res)=>{
//   const delete_data = await prisma.newsInfo.deleteMany({})
//   if(delete_data){
//     res.status(200).json({
//       status: "success"
//     })
//   }
// })

app.use(express.json({strict : false}))
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// app.use('/dokumentasi', swagerUi.serve, swagerUi.setup(swaggerJson))
app.use('/api/v1', router)

app.use((req, res, next) => {
  if (!app.get(req.path)) {
    res.status(404).send('Endpoint tidak ditemukan');
    return;
  }
  next();
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})
module.exports = app;