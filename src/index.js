const { app } = require('./app');

async function main(){
    await app.listen(3000);
    console.log('Servidor inciado con exito!');
    console.log('El puerto 3000 ha sido abierto')
};

main();

/*
app.use(require('./routes/index'));
//app.use(require('./routes/index'));
//app.use(require('./routes/index'));

app.get('/', function(req,res){
    res.send('Ruta INICIO')
})
*/
