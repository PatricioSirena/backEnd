module.exports = {
    index: (req, res) => {
        res.status(200).json({ msg: "Realizaste una petición getProducts" })
    },
    getOne: (req, res) => {
        res.status(200).json({ msg: "Realizaste una petición getOneProduct" })
    },
    update: (req, res) => {
        res.status(200).json({ msg: "Realizaste una petición updateProduct" })
    },
    create: (req, res) => {
        res.status(201).json({ msg: "Realizaste una petición createProduct" }
        )
    },
    delete: (req, res) => {
        res.status(200).json({ msg: "Realizaste una petición deleteProduct" })
    }
}