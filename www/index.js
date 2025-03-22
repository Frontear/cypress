import express from "express";
import { handler } from "./dist/server/entry.mjs";


const app = express();
const port = 3000;

app.use("/", express.static("./dist/client"));
app.use(handler);

app.listen(8080);
