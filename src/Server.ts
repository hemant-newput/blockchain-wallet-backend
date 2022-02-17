
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import User from "./routes/user"
import Wallet from "./routes/wallet"
const app = express();
const db = require("../config/db");
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));

app.use(express.static('assets'))      
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
    preflightContinue: true,
    allowedHeaders: [
        '*',
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'Accept-Version',
        'device-id',
        'env',
        'User-IP',
    ],
}));

app.get('/v1', (req: any, res: { json: (arg0: { version: string; application: string; license: string; }) => void; }) => {
    res.json({
        version: 'v1',
        application: 'Mnemonics API',
        license: 'Hemant Shrivastava',
    });
});


app.use('/user/', User);
app.use('/wallet', Wallet)
app.all('*', (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
    res.json({
        message: "Route not Found"
    });
});

const PORT = 3000;

(async () => {
    const server = app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
        db.authenticate()
        .then((result: any) => {
          console.log("Connection established.")
        })
        .catch((error: any) => {
          console.log("Unable to connect to db: ", error);
        });
      
    });
    server.keepAliveTimeout = 65000;
    server.headersTimeout = 66000;
})();
