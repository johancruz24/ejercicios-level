const {Schema, model} = require('mongoose')

var  emailCompare = [/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, "Write a valid email"];
var  nameCompare = [/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,"Must be Pepito Perez"];

const peopleSchema = new Schema({
    name: {type: String, required: "The name field is required ",minlength:[5,"Name must have 8 character"], match: nameCompare},
    mail: {type: String, required: "The email field is required ", match: emailCompare, },
    km: {type: Number, min:[4,"Lets go !!! You can walk more "], required: "The distance field is required"}
}, {
    timestamps: true, 
    versionKey: false
})

module.exports = model('people', peopleSchema)
