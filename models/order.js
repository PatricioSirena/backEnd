const {Schema,model} =require('mongoose');
const OrderSchema = Schema({
    // usuario:{
    //     type:String,
    //     required:[true, "El usuario es obligatorio"]
    // },
    platos:{
        type: Array,
        default: []
    },
    pendiente: {
        type: Boolean,
        default: true
    },
    precio: {
        type: Number,
        required: [true, "El precio es requerido"]
    }
})
OrderSchema.methods.toJSON = function () {
    const {_id,...order} = this.toObject();
    order.id = _id;
    return order
};
module.exports = model("Order",OrderSchema);
