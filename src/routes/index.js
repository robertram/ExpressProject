const express= require('express');
const router= express.Router();

router.get('/', (req,res)=>{
    res.render('index', {title:'Home'})
});

router.get('/contact', (req,res)=>{
    res.render('contact', {title:'Contacts'})
});

router.get('/about', (req,res)=>{
    res.render('about', {title:'About'})
});

router.get('/menu', (req,res)=>{
    res.render('menu', {title:'menu'})
});

router.get('/proveedores', (req,res)=>{
    res.render('proveedores', {title:'Proveedores'})
});

router.get('/parametrosConsecutivos', (req,res)=>{
    res.render('parametrosConsecutivos', {title:'Parametros Consecutivos'})
});

router.get('/bodegas', (req,res)=>{
    res.render('bodegas', {title:'Bodegas'})
});

router.get('/camiones', (req,res)=>{
    res.render('camiones', {title:'Camiones'})
});

router.get('/tipoMateriaPrima', (req,res)=>{
    res.render('tipoMateriaPrima', {title:'Tipo Materia Prima'})
});

router.get('/puntoDeVenta', (req,res)=>{
    res.render('puntoDeVenta', {title:'Punto de Venta'})
});

router.get('/productosMaestro', (req,res)=>{
    res.render('productosMaestro', {title:'Productos Maestro'})
});

router.get('/parametrosGenerales', (req,res)=>{
    res.render('parametrosGenerales', {title:'Parametros Generales'})
});

router.get('/ventas', (req,res)=>{
    res.render('ventas', {title:'Ventas'})
});

/*TRAMSA*/


router.get('/login', (req,res)=>{
    res.render('TRAMSA/login', {title:'Login'})
});

module.exports= router;
