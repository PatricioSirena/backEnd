/*
 "name" "descripction" "price" "src"
 */
const { Schema, model } = require('mongoose');
const ProductosSchema = Schema({
    id: {},
    titulo: {},
    texto: {},
    categoria: {},
    precio: {},
    imagen: {},
    activo: {}
});

ProductosSchema.methods.toJSON = function () {
    const { __v, _id, ...producto } = this.toObject();
    producto.id = _id;
    return producto
};
module.exports = model("Producto", ProductosSchema);
