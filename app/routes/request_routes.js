module.exports = function (app, db) {
  app.get("/getAdvice", (req, res) => {
    db.collection("notes").find(() => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(item);
      }
    });
  });

  app.post("/submitAdvice", (req, res) => {
    const note = { req };
    db.collection("notes").insert(note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        console.log("success!");
        res.send(result.ops[0]);
      }
    });
  });
};
