/*
 "name" "descripction" "price" "src"
 */
const { Schema, model } = require('mongoose');
const ProductosSchema = Schema({
<<<<<<< HEAD
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
=======
    titulo: {
        type: String,
        // required: [true, "El nombre es obligatorio"]
    },
    precio: {
        type: Number,
        // required: [true, "El precio es obligatorio"]
    },
    texto: {
        type: String,
        // required: [true, "La descripción es obligatoria"]
    },
    categoria: {
        type: String,
        // required: [true, "La categoria es obligatoria"]
    },
    activo: {
        type: Boolean,
    },
    imagen: {
        type: String,
        // required: [true, "La imagen del producto es obligatoria"]
>>>>>>> c6210b4cd138d0f99b08b21911c32df8e33094bb
    },

});
ProductosSchema.methods.toJSON = function () {
    const { __v, _id, ...producto } = this.toObject();
    producto.id = _id;
    return producto
};
module.exports = model("Producto", ProductosSchema);
