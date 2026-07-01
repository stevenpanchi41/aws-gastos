const usuariosControllers = {};

let usuarios = [
    {
        id: 1,
        ci: "1714032789",
        nombre: "Ana",
        apellido: "Vivas"
    },
    {
        id: 2,
        ci: "1234567890",
        nombre: "Steven",
        apellido: "Panchi"
    }
];

usuariosControllers.getUsuarios = async(req,res)=>{
    res.json(usuarios);
};

usuariosControllers.addUsuario = async(req,res)=>{
    const nuevoUsuario = {
        id: req.params.id,
        ci: req.body.ci,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };

    usuarios.push(nuevoUsuario);

    console.log(req.body);
    console.log(req.params);

    res.send('Usuario nuevo registrado');
};

usuariosControllers.editUsuario = async(req,res)=>{
    const { id } = req.params;

    console.log(req.body);
    console.log(req.params);

    res.send('Usuario ' + id + ' actualizado');
};

usuariosControllers.deleteUsuario = async(req,res)=>{
    const { id } = req.params;

    res.send('Usuario ' + id + ' borrado');
};

module.exports = usuariosControllers;