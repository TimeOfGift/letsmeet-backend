import express, {urlencoded, json} from "express";
import cors from 'cors';
import DB from './models/database';


const app = express();
const Port = process.env.PORT ||  8000;
import "dotenv/config";

DB._connect;
 
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => res.send({
  message: 'Welcome to EventMeet'
}))

app.listen(Port, () => console.log(`Application running on port ${Port}`))