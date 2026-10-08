import express, { response } from "express";
import { products } from "./data.js";

const app = express();

app.get("api/products",(req,res)=>{

    let sortedProducts = products.map(({name,image,price,id})=>({name,image,price,id}))
    res.status(200).json({count:sortedProducts.length,data:sortedProducts})
})



app.use((req,res) => {
    res.status(404).send("<h1>Page not found</h1>")
});

app.get("api/products/:pid",(req,res)=> {

})

app.listen(4444, () => console.log("prg 4 is running on port 4444"));
