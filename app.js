const db = require('./data/database')
const express = require('express');
const router = require('./router/todo.router');

const app = express();

app.use(express.urlencoded())
app.use(express.json());



app.use(function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/todo', router);

app.use((req, res , next) => {
//  res.json({message: 'page not found!'});
res.redirect('/todo')
 next();
})

db.initDB().then(() => {
    app.listen(8000, () => {
        console.log('Server is on Port:8000 ...');
    })
})
