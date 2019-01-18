import express from "express";

const app = express();
const PORT = 8080; // default port to listen

// define a rout handler fo rthe default home page
app.get("/", (req, res) => {
  res.send("Hello World");
});

// start the Express server
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server listening on port ${PORT}`);
});
