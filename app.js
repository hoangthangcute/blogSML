const ejs = require('ejs');
const express = require('express');
const morgan = require('morgan');

const { port } = require('./config/config');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(morgan('dev'));

app.use('/public', express.static('./public'));

// routes
app.use(routes);    


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    } 

    console.log(`Example app listening at http://localhost:${port}`)
});
