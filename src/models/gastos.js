const mongoose = require('mongoose');

const { Schema } = mongoose;

const GastosSchema = new Schema({

    codigo:{
        type:Number,
        required:true
    },

    tipo:{
        type:String,
        enum:[
            'Alimentacion',
            'Vivienda',
            'Salud',
            'Educacion',
            'Vestimenta',
            'Turismo'
        ],
        required:true
    },

    monto:{
        type:Number,
        required:true
    },

    descripcion:{
        type:String,
        required:true
    },

    fechaCreacion:{
        type:Date,
        default:Date.now
    }

},{
    versionKey:false
});

module.exports = mongoose.model('Gasto', GastosSchema);