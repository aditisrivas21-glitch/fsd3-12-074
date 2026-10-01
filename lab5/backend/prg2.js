import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app= express();

const filename =fileURLToPath(import.meta.url)
const dirname =path.dirname(filename)


app.get("/",(req,res)=>{

})



app.listen(4444,() => console.log("prg 1 is running on port 4444"));
