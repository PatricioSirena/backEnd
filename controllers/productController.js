const productos = require('../models/productos');
const Producto = require('../models/productos')

const index = async (req, res) => {
    try {
        const productos = await Producto.find();
        return res.status(200).json({ data: productos })
    } catch (error) {
        return res.json({ error })
    }
}

const getOne = async (req, res) => {
    const { id } = req.params
    try {
        const producto = await productos.findById(id)
        return res.status(200).json({ producto })
    } catch (error) {
        return res.json({ error })
    }
}

const update = async (req, res) => {
    const { id } = req.params
    const { name, description, price, src } = req.body
    const productoNew = { name, description, price: Number(price), src }
    console.log(productoNew);
    try {
        let newProduct = await Producto.findByIdAndUpdate(id, productoNew, { new: true })
        return res.status(201).json({ newProduct })
    } catch (error) {
        return res.json({ error })
    }
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

const del = async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        await Producto.findByIdAndDelete(id)
        return res.status(200).json({ msg: "Se elimino con éxito el producto" })
    } catch (error) {
        return res.json({ error });
    }
}

const search = async (req, res) => {
    const { busqueda } = req.query
    let busquedaMin = busqueda.toLowerCase()
    // let filtro = { likes: { $in: [busqueda, busquedaMin] } }
    const productos = await Producto.find( )
    let productosConseguidos = []
    for (let index = 0; index < productos.length; index++) {
        console.log(productos[index]);
        
    }
    res.json({ productos })
}

module.exports = {
    index,
    getOne,
    update,
    create,
    del,
    search
}