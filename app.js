const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const body_parser = require('body-parser');

const material_controller = require('./material_controller');
const mongoose = require('mongoose');


// npm init
// npm install express
// npm install nodemon --save-dev
// npm run start-dev
//npm install mongoose

app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended: true
})); // material/id

app.use((req, res, next) => {
    console.log(req.method, ' ', req.path);
    next();
}); // GET /api/materials


// RESTful API
// CRUD OPERATIONS

//CREATE
app.post("/api/material", material_controller.api_post_material);

//api.domain.com/materials
// READ
app.get("/api/materials", material_controller.api_get_materials);
// UPDATE

// DELETE

//2jyam0gytm7p088B
const database_url = "mongodb+srv://server:2jyam0gytm7p088B@cluster0-oqpbt.mongodb.net/materialdb?retryWrites=true&w=majority"
mongoose.connect(database_url,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:true,


}).then( ()=> {
    console.log('database connected');
    app.listen(port);

} ).catch(err=>{
console.log(err);

});

