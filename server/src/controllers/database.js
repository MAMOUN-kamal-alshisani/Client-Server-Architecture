const connection = require("../database/db");

function createData(req, res) {
  const { intUserID, strName, dtmDOB, strEmail, strPassword, blnIsActive } =
    req.body;
  connection.query(
    "INSERT INTO tblUser (intUserID,strName,dtmDOB,strEmail,strPassword,blnIsActive) VALUES (?,?,?,?,?,?)",
    [intUserID,strName, dtmDOB, strEmail, strPassword, blnIsActive],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(404).send(err.message);
      } else {
        console.log('data has been created successfully');
        res.status(201).send(result);
      }
    }
  );
}


function getAllData(req, res){
    connection.query('select * from tblUser', (err, rows, fields) => {
        if (err){
          console.log(err);
          res.status(404).send(err);
        }
    
        else{
          console.log(rows);
          res.status(200).send(rows);

        }
    })
};


async function getOne(req,res) {
const Id = req.params.Id
// connection.query('SELECT intUserID FROM tblUser WHERE username = (?)', data.username, function(err, rows) {
//   if (err) {
//       callback(err, null);
//   } else 
//       callback(null, rows[0].id_user);
// });

// connection.query(`SELECT intUserID FROM tblUser WHERE intUserID = ${intUserID} `, (err, res) => {
//   if (err) {
//     console.log("error: ", err);
// res.status(404).send(err)
// }
// if (res.length) {
//   console.log("found intUserID: ", res);
//   res.status(200).send(res)
// }
// })

// connection.query('select * from tblUser where intUserID=?',
//         [intUserID],
        // function (error, results, fields) {
        //     if (error) throw error;
        //     res.send(results);
        // });
        connection.query(`select * from tblUser where strName = ?`,[Id], (err, rows) => {
          if (err){
            console.log(err);
            res.status(404).send(err);
          }
      
          else{
            console.log(rows);
            res.status(200).send(rows);
  
          }
      })
}
module.exports = {createData,getAllData,getOne};
