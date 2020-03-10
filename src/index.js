//npm run dev
//npm start
//npm i nodemon -D
const express= require('express');

const app= express();
const path= require('path');

//Variable de diccionario (app.set y app.get)
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');

//Middleware

app.use( express.static( "public" ) );
app.use('/nuevaRuta', ()=>{
    console.log("Estamos en el index");
});

app.get('/nuevaRuta', (req, res)=>{
    res.send("Estamos en el index");
});



//Rutas
/*
app.get('/', (req,res)=>{
    res.send('Vamos bien');  
})*/


/*
app.get('/', (req,res)=>{
    //res.sendfile(path.join(__dirname,'/views/index.html'));
    //console.log(__dirname);
    res.render('index', {title:'Primer'});
})*/

app.use(require('./routes/index'));

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));*/


//Escuchando el servidor
app.listen(app.get('port'), ()=>{
    console.log('Server listening in', app.get('port'));
});


