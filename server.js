require('dotenv').config();//הפעלת הפונקציה לטעינת הגדרות לקובץ .env
const http=require('http');
const app=require('./app');
const port=3112;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log("Server Is Up")});