import { MongoClient } from 'mongodb';
import getDBConnection from '../db';

module.exports = async (req, res) => {
  const db = await getDBConnection();
  db.collection("docs").findOne({ name: req.body.name }, (err, result) => {
    if (err || result === null) {
      res.send({
        success: false,
        err
      });
    } else {
      res.send({
        success: true,
        data: result
      });
    }
  });
};
