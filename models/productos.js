/*
 "name" "descripction" "price" "src"
 */
 const {Schema,model} =require('mongoose');
 const ProductosSchema = Schema({
     name:{
         type:String,
         required:[true, "El nombre es obligatorio"]
     },
     description:{
         type:String,
         required:[true, "La descripción es obligatoria"]
     },
     price:{
         type:Number,
         required:[true, "El precio es obligatorio"]
     },
     src:{
         type:String,
         required:[true, "La imagen del producto es obligatoria"]
     },
     
 });
 ProductosSchema.methods.toJSON = function () {
     const {__v, _id,...producto} = this.toObject();
     producto.id = _id;
     return producto
 };
 module.exports = model("Producto",ProductosSchema);
 