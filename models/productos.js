/*
name, description, price, src
*/

const { Schema, model } = require('mongoose') 
const ProductosSchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    description: {
        type: String,
        required: [true, "La descripcion es obligatoria"]
    },
    price: {
        type: Number,
        required: [true, "El precio es obligatorio"]
    },
    src: {
        type: String,
        required: [true, "La imagen es obligatoria"]
    }
})

ProductosSchema.methods.toJSON = function () {
    const {__v, _id, ...producto} = this.toObject()
    producto.uid = _id
    return producto
}

module.exports = model("Producto" , ProductosSchema)
