const orders = require('../models/order');
const Order = require('../models/order')

const index = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json({ data: orders })
    } catch (error) {
        return res.json({ error })
    }
}

const getOne = async (req, res) => {
    const { id } = req.params
    try {
        const order = await orders.findById(id)
        return res.status(200).json({ order })
    } catch (error) {
        return res.json({ error })
    }
}

const update = async (req, res) => {
    const { id } = req.params
    const { platos, pendiente, precio } = req.body
    const orderNew = { platos, pendiente, precio }
    console.log(orderNew);
    try {
        let newOrder = await Order.findByIdAndUpdate(id, orderNew, { new: true })
        return res.status(201).json({ newOrder })
    } catch (error) {
        return res.json({ error })
    }
}

const create = async (req, res) => {

    let { platos, pendiente, precio } = req.body
    let order = { platos, pendiente, precio };
    const newOrder = await new Order(order)
    console.log(newOrder);
    try {
        await newOrder.save();
        return res.status(201).json({ mgs: 'Orden creada con éxito' })
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    index,
    getOne,
    update,
    create
}