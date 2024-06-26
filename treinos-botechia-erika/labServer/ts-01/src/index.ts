process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.APP_ENV = process.env.APP_ENV || "development";
import dotenv from "dotenv";

dotenv.config({
  path: `${__dirname}/../config/${process.env.APP_ENV}`,
});

console.log(process.env.APP_FOO);
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";


import bandsRouter from "./router/apiMusic/bands";
import songsRouter from "./router/apiMusic/songs";
import usersRouter from "./router/apiUsers/users";
import purchasesRouter from "./router/apiAdmin/purchases";
import projectsRouter from "./router/apiSchool/projects";
import postsRouter from "./router/apiPosts/posts";
import frotaRouter from './router/apiCars/frota'
import coursesRouter from "./router/apiSchool/courses";
//import purchasesRouter from './router/purchases'
const app = express();
import { ROLES } from "./models/User";
//import { Purchases, ProductPurchased } from './models/Purchases';
import morgan from "morgan";

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.resolve(__dirname, "./../public/")))
app.get("/", (req: Request, res: Response) => {
  res.send(`
    <header>  
    <h1>App LabSERVER</h1>
    </header>

    <main>
    <h2>Click para ir ao endpoint desejado</h2>
    <ul>
      <li><a href="/frota">FROTA</a></li>
   <li><a href="/courses">COURSES</a></li>


    </ul>


    </main>
    

    <footer>

    </footer>
    `);
});

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

app.use("/posts", postsRouter);
app.use("/courses", coursesRouter);


/* LabCars */
app.use("/frota", frotaRouter );



app.listen(9694, () => {
  console.log(`Servidor rodando na porta 9694 `);
});
