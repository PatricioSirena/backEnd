const login = (req, res) => {
    res.status(201).json({ msg: "Peticion a auth post" })
}

module.exports={
    login
}