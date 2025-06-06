import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const firstName = req.body["fName"];
  const lastName = req.body["lName"];
  const nameLength = firstName.length + lastName.length;
  const data = {
    firstName,
    lastName,
    nameLength,
    htmlContent: `<h1>There are ${nameLength} letters in your name.</h1>`,
  };
  // console.log(firstName, lastName)
  // console.log(nameLength);
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
