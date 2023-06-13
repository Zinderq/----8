const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.status(200).json("Сервер працює");
})
const TenderRoutes = require('./router/tender.routes');
app.use('/api/tender',TenderRoutes);
const CategoryRoutes = require('./router/category.routes');
app.use('/api/category',CategoryRoutes);
const UserRoutes = require('./router/user.routes');
app.use('/api/user',UserRoutes);
app.listen(PORT,()=> console.log("SERVER START !!!"));