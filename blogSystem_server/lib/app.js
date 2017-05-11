import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';

import manager from './router/manager';

let app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true })); 
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
	secret: 'susan'
}));

//设置跨域 
app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});

app.use('/manager', manager);

app.listen(3001, () => {
	console.log('server running http://localhost:3001');
});