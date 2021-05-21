module.exports = function (app, db) {
  app.get("/getAdvice", (req, res) => {
    db.collection("advice")
      .find({})
      .toArray(function (err, docs) {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(docs);
        }
      });
  });

  app.post("/submitAdvice", (req, res) => {
    const note = { body: req.body.body };
    db.collection("advice").insert(note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        console.log("success!");
        res.send(result.ops[0]);
      }
    });
  });
};
