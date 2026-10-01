import express from "express";

const app = express();

app.get("/",(req,res) => {
   // res.send("Hello Express");
   res.send("<h1> Hello Express</h1>");
   res.send(`
    <h1> Hello Server</h1>
    <h2>I am responding from expresss Framework</h2>
    <h3>The code is minimal and easy to run</h3>
    `);
});

app.get('/about',(reg,res)=>{
    res.send("<h2>About page </h2>")
});

app.get("/products", (reg, res) => {
 const product={
    id:1,
    name:"Mobile",
    price:25000,
 };
 res.send(product);
});

// this line must be last line 
app.listen(4444,() => console.log("prg 1 is running on port 4444"));

