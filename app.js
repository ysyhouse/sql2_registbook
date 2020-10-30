/** 전역변수 *************************/
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();


/** 전역변수 *************************/
const memberRouter = require('./routers/member');
const sqlRouter = require('./routers/sql');
const sqlRouter2 = require('./routers/sql2');


/** 서버구동 *************************/
app.listen(process.env.PORT, () => { console.log(`http://127.0.0.1:${process.env.PORT}`) });


/** PUG 등록 *************************/
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;


/** Router *************************/
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname, './public')));
app.use('/storage', express.static(path.join(__dirname, './uploads')));
app.use('/member', memberRouter);
app.use('/sql', sqlRouter);
app.use('/sql2', sqlRouter2);
