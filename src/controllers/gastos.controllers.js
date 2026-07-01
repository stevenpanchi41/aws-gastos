const Gasto = require('../models/gastos');

const gastosControllers = {};

const formatearGasto = (gasto) => {
    return {
        id: gasto._id,
        codigo: gasto.codigo,
        tipo: gasto.tipo,
        monto: gasto.monto,
        descripcion: gasto.descripcion,
        fechaCreacion: new Date(gasto.fechaCreacion).toLocaleDateString('es-EC',{
            day:'2-digit',
            month:'2-digit',
            year:'numeric'
        })
    };
};

gastosControllers.getGastos = async(req,res)=>{
    const gastos = await Gasto.find();
    res.json(gastos.map(formatearGasto));
};

gastosControllers.addGasto = async(req,res)=>{
    const gasto = new Gasto({
        codigo:req.body.codigo,
        tipo:req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    });

    await gasto.save();

    res.json('Gasto guardado');
};

gastosControllers.getGasto = async(req,res)=>{
    const gasto = await Gasto.findById(req.params.id);

    if(!gasto){
        return res.status(404).json('Gasto no encontrado');
    }

    res.json(formatearGasto(gasto));
};

gastosControllers.getGastosTipo = async(req,res)=>{
    const gastos = await Gasto.find({
        tipo:req.params.tipo
    });

    res.json(gastos.map(formatearGasto));
};

gastosControllers.editGasto = async(req,res)=>{
    const { id } = req.params;

    const gasto = {
        codigo:req.body.codigo,
        tipo:req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    };

    await Gasto.findByIdAndUpdate(id, {$set:gasto}, {new:true});

    res.json('Gasto actualizado');
};

gastosControllers.deleteGasto = async(req,res)=>{
    await Gasto.findByIdAndDelete(req.params.id);
    res.json('Gasto eliminado');
};

module.exports = gastosControllers;