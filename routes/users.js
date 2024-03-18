const express = require('express');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.send();
  })
  .post((req, res) => {
    res.send();
  });

module.exports = router;
