const connection = require("../database/db");

function createData(req, res) {
  const { intUserID, strName, dtmDOB, strEmail, strPassword, blnIsActive } =
    req.body;
  connection.query(
    "INSERT INTO tblUser (intUserID,strName,dtmDOB,strEmail,strPassword,blnIsActive) VALUES (?,?,?,?,?,?)",
    [intUserID, strName, dtmDOB, strEmail, strPassword, blnIsActive],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(404).send(err.message);
      } else {
        console.log("data has been created successfully");
        res.status(201).send(result);
      }
    }
  );
}

function getAllData(req, res) {
  connection.query("select * from tblUser", (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      console.log(rows);
      res.status(200).send(rows);
    }
  });
}

async function getOne(req, res) {
  const Id = req.params.Id;

  connection.query(
    `select * from tblUser where strName = ?`,
    [Id],
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(404).send(err);
      } else {
        console.log(rows);
        res.status(200).send(rows);
      }
    }
  );
}
module.exports = { createData, getAllData, getOne };
