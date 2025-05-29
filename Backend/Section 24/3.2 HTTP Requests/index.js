import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.get("/about", (req, res) => {
    res.send("<p>I am a Web Developer!</p>")
})

app.get("/contact", (req, res) => {
    res.send("<ol><li>(11)99773-9008</li><ol/>")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
})
