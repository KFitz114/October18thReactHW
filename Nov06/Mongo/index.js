const express = require ('express');
const app = express();

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv:mongodb+srv://KFitzGerald:Password1234!@skillspirecluster.opbwt.mongodb.net/studentDatabase?retryWrites=true&w=majority'
, {useNewUrlParser: true})

mongoose.connection.once('open', () => {
    console.log('Connected to DB');
})

const StudentSchema = new Schema({
    name: String,
    id: Number
})

const StudentModel = mongoose.model('Students', StudentSchema);

app.listen('3400', (req, res) => {
    console.log('app listening on port 3400');
})

app.get('/', function(req, res) {
    res.send({message: 'Hello world!'});
})

app.get('/about', function(req,res) {
    res.send({message: 'About page'});
})

app.post('/post', function(req, res) {
    let studentObj = {
        name: 'Keegan',
        id: 112
    }
    const student = StudentModel.create(studentObj);
    console.log('Student Obj: ', student);
    res.send({message: 'Posted'});
})
