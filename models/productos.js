/*
 "name" "descripction" "price" "src"
 */
const { Schema, model } = require('mongoose');
const ProductosSchema = Schema({
    id: {
        type: Number,
        required: [true, "El id es Obligatorio"]
    },
    titulo: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    texto: {
        type: String,
        required: [true, "El texto es obligatoria"]
    },
    categoria:{
        type:String,
        required:[true, "La categoria es obligatoria"]
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"]
    },
    imagen: {
        type: String,
        required: [true, "La imagen del producto es obligatoria"]
    },
    activo: {
        type: String,
        required: [true]
    },

});
ProductosSchema.methods.toJSON = function () {
    const { __v, _id, ...producto } = this.toObject();
    producto.id = _id;
    return producto
};
module.exports = model("Producto", ProductosSchema);
