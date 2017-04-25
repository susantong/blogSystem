import express from 'express';
import cookieParse from 'cookie-parse';
import session from 'express-session';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//开启session服务
app.use(cookieParse());
app.use(session({
	secret: '12345',
	name: 'node_sessionId',
	cookie: {maxAge: 8000000},	//设置cookie最大时长
	resave: true,
	saveUninitialized: false
}));

app.get('/', (req, res) => {
	res.send('hello susan!');
});

app.listen(3001, () => {
	console.log('server running http://localhost:3001');
});