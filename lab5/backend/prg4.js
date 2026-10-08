import express from "express";


const app = express();




app.use((req,res) => {
    res.status(404).send("<h1>Page not found</h1>")
});

app.listen(4444, () => console.log("prg 4 is running on port 4444"));
