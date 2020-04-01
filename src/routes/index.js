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

router.get('/parametrosGenerales', (req,res)=>{
    res.render('parametrosGenerales', {title:'Parametros Generales'})
});

router.get('/puntoDeVenta', (req,res)=>{
    res.render('puntoDeVenta', {title:'Punto de Venta'})
});

/*TRAMSA*/


router.get('/login', (req,res)=>{
    res.render('TRAMSA/login', {title:'Login'})
});

router.get('/parametrosGenerales', (req,res)=>{
    res.render('TRAMSA/parametrosGenerales', {title:'Parametros Generales'})
});


router.get('/consecutivos', (req,res)=>{
    res.render('TRAMSA/consecutivos', {title:'Consecutivos'})
});


router.get('/camiones', (req,res)=>{
    res.render('TRAMSA/camiones', {title:'Camiones'})
});


router.get('/bodegas', (req,res)=>{
    res.render('TRAMSA/bodegas', {title:'Bodegas'})
});

router.get('/tipoMateriaPrima', (req,res)=>{
    res.render('TRAMSA/tipoMateriaPrima', {title:'Tipo Materia Prima'})
});

router.get('/materiaPrima', (req,res)=>{
    res.render('TRAMSA/materiaPrima', {title:'MateriaPrima'})
});

router.get('/productos', (req,res)=>{
    res.render('TRAMSA/productos', {title:'Productos'})
});

router.get('/proveedores', (req,res)=>{
    res.render('TRAMSA/proveedores', {title:'Proveedores'})
});

router.get('/clientes', (req,res)=>{
    res.render('TRAMSA/clientes', {title:'Clientes'})
});

router.get('/procesos', (req,res)=>{
    res.render('TRAMSA/procesos', {title:'Procesos'})
});

router.get('/produccionLote', (req,res)=>{
    res.render('TRAMSA/produccionLote', {title:'Produccion en Lote'})
});

router.get('/puntoVenta', (req,res)=>{
    res.render('TRAMSA/puntoVenta', {title:'Punto de Venta'})
});

router.get('/cajas', (req,res)=>{
    res.render('TRAMSA/cajas', {title:'Cajas'})
}); 






module.exports= router;
