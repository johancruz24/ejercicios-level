const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/mean-peoples',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.log(err));