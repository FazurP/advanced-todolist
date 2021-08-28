const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/advanced-todo-list'));
app.get('/',function(req,res){
    res.sendFile('index.html',{root:'dist/advanced-todo-list/'});
});

app.listen(process.env.PORT || 3000)