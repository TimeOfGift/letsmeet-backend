import express, {urlencoded, json} from "express";
import cors from 'cors';
// require("./models/database").default;
import apiRoute from './routes/';


const app = express();
const Port = process.env.PORT ||  5000;
import "dotenv/config";

 
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => res.send({
  message: 'Welcome to EventMeet'
}));

 app.use('/api/v1', apiRoute);

app.use('*', (req, res) => {
  res.status(404);
  res.json({
    status: 'Failed',
    message: 'Page not found'
  });
});


app.listen(Port, () => console.log(`Application running on port ${Port}`))