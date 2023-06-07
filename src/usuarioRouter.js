const express = require('express');

const router = express.Router();
router.use(express.json());

const Usuario = require('./usuarioModel')

router.get('/', async (req, res) => {
    const lista  = await Usuario.findAll();

    const result = lista.map(u => ({
        "email": u.email,
        "name": u.name
    }));

    res.send({
        "data":result,
    });
});

router.get('/:id', async (req, res) => {
    const usuario  = await Usuario.findByPk(req.params.id);
    if(usuario)
        res.send(usuario);
    else res.send({

    },404);
});

router.get('/matricula/:matricula', async (req, res) => {
    res.send({});
});

router.post('/', async (req, res) => {//salvar
    try{
        const usuario = await Usuario.create(req.body);
        res.send(usuario);
    }catch(error){
        res.send({
            "message": error.message,
        },500);
    }
   
});

router.post('/login', async (req, res) => {//salvar

    fetch('http://localhost:8000/login', {
        method: 'POST',
        body:{
            "email": "",
            "password": ""
        }
    });

    try{
        const {email, password} =  req.body;
        const lista  = await Usuario.findAll();
        const encontado = lista.find(u => u.email == email && u.password == password)
        if(encontado)
            res.send(
                encontado
            );
        else    
            res.send({
                "message": "Login inválido"
            }, 400);
    }catch(error){
        res.send({
            "message": error.message,
        },500);
    }
   
});

router.put('/:id', async (req, res) => {//atualizar
    const usuario  = await Usuario.findByPk(req.params.id);
    res.send({

    });
});

router.delete('/:id', async (req, res) => {//delete
    res.status(204).send({

    });
});

router.post('/:id/atividade', async (req, res) => {
    res.send({

    });
});

router.put('/:id/atividade/:idAtividade', async (req, res) => {
    res.send({

    });
});

module.exports = router;