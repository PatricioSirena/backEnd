const Producto = require('../models/productos')

const index = async (req, res) => {
    let productos = await Producto.findOneAndUpdate()
    console.log(productos);
    res.status(200).json({ data: productos })
}

const getOne = (req, res) => {
    res.status(200).json({ msg: "Realizaste una petición getOneProduct" })
}

const update = (req, res) => {
    res.status(200).json({ msg: "Realizaste una petición updateProduct" })
}

const create = async (req, res) => {

    let { name, description, price, src } = req.body;
    let producto = { name, description, price, src };
    const newProducto = await new Producto(producto)
    console.log(newProducto);
    try {
        await newProducto.save();
        return res.status(201).json({ mgs: 'Producto creado con éxito' })
    } catch (error) {
        return res.json({ error });
    }
}

const del = (req, res) => {
    res.status(200).json({ msg: "Realizaste una petición deleteProduct" })
}
module.exports = {
    index,
    getOne,
    update,
    create,
    del
}