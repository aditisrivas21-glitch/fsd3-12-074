import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";


const app = express();

const filename =fileURLToPath(import.meta.url);
const dirName = path.dirname(filename);

app.use(express.static(path.join(dirName, "pages")));


app.use((req,res) => {
    res.status(404).send("<h1>Page not found</h1>")
});

app.listen(4444, () => console.log("prg 3 is running on port 4444"));
