const User = require('../models/user');



exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok:true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}

exports.updateUsers = async (req,res) =>{
    

    try{
        const id = req.params.id

        const user = await User.findByPk(id);
        
        if(user){
            const userActualizado = await user.update(req.body)

            res.status(202).json({
                ok:true,
                msg:"Usuario actualizado con exito",
                userActualizado
            })
        }else{
            res.status(404).json({
                ok:false,
                msg:"No existe ese usuario"
            })
        }
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:"Error al modificar usuario"+error,
        })
    }
}

exports.createUser = async(req, res)=>{
    try {
        console.log(req.body);
        const {username, password, email} = req.body;

        const nuevoUsuario={
            username,
            password,
            email
        }
        const user = await User.create(nuevoUsuario);

        res.status(201).json({
            ok:true,
            user
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'Server Error'
        })
    }
}

exports.deleteUser = async (req,res) =>{
    try{
        const id = req.params.id

        const user = await User.findByPk(id);
        
        if(user){

            await user.destroy(req.body)

            res.status(202).json({
                ok:true,
                msg:"Usuario borrado con exito",
                
            })
        }else{
            res.status(404).json({
                ok:false,
                msg:"No existe ese usuario"
            })
        }
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:"Error al borrar usuario"+error,
        })
    }
}