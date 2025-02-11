const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/',(req,res) =>{
    res.send('API Working.');
})

app.post('/api/user/signIn', (req,res) => UserController.signIn(req,res));
app.get('/api/user/info', (req, res) => UserController.info(req, res));


app.listen(3000,(err) => {
    if (err) console.log(err);
    console.log('Sever start on port 3000');
})