const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./dist")));

app.get("/home", (req, res) => {
  db.query("select itemName from groceryitems", (err, data) => {
    if (err) {
      console.log("this is junk");
    } else {
      res.send(data);
    }
  });
});

//delete item from database where id =

app.delete("/delete", (req, res) => {
  db.query("delete itemName from groceryitems WHERE id =", (err, data) => {
    if (err) {
      console.log("this is junk");
    } else {
      res.send("item deleted");
    }
  });
});

//insert item into db table groceryitems

app.post("/post", (req, res) => {
  //   console.log(req.body.data);
  db.query(
    "insert into groceryitems (itemName) values (?)",
    req.body.data,
    (err) => console.log("data sent to database")
  );

  //   console.log("post request received");
  res.send("post request received!!!");
});

app.listen(port, () => console.log(`app is listening on port ${port}`));
