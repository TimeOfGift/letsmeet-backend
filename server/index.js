import express, {urlencoded, json} from "express";
import cors from 'cors';
// require("./models/database").default;


const app = express();
const Port = process.env.PORT ||  8000;
import "dotenv/config";

 
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => res.send({
  message: 'Welcome to EventMeet'
}))

app.listen(Port, () => console.log(`Application running on port ${Port}`))