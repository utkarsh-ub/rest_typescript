import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/sample';

const NAMESPACE='Server';
const app=express();

app.use((req,res,next)=>{

    logging.info(NAMESPACE, `Method:  [${req.method}]  -URL: [${req.url}]  -IP: [${req.socket.remoteAddress}] `);

    res.on('finish',()=>{
  logging.info(NAMESPACE, `Method:  [${req.method}]  -URL: [${req.url}]  -IP: [${req.socket.remoteAddress}] -Status: [${res.statusCode}]`);
    })

    next();

});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req,res,next)=>{

    res.header('A-C-A-Origin','*');
    res.header('A-C-A-Header','Origin,X-requested-with,Content-Type,Accept,Authorization');

    if(req.method=='OPTIONS')
    {
        res.header('A-C-A-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }

    next();
});

app.use('/sample', sampleRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});


const httpServer=http.createServer(app);

httpServer.listen(config.server.port,()=>logging.info(NAMESPACE,`server is running on ${config.server.hostname}:${config.server.port}`) );