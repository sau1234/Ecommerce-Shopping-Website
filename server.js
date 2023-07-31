import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', Router);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get('*', function(_, res) {
     res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err){
        res.status(500).send(err);
     }); 
})
 


const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb://${USERNAME}:${PASSWORD}@ac-ykcnkyc-shard-00-00.jt0fafz.mongodb.net:27017,ac-ykcnkyc-shard-00-01.jt0fafz.mongodb.net:27017,ac-ykcnkyc-shard-00-02.jt0fafz.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-my3jn7-shard-0&authSource=admin&retryWrites=true&w=majority`;
Connection(URL);



app.listen(PORT, () => console.log(`server running successfully on port ${PORT} abcd`));

DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'palsaurabh1607@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'
