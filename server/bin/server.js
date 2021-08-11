const app=require('../app');
const http= require('http');


const port=process.env.PORT  || 4000;
app.set('port', port);


const server=http.createServer(app)
server.listen(port,()=>{
    console.log(`we listen on http://localhost:${port}`)
});