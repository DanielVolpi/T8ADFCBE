const express = require('express');
const router = express.Router();
const specialists = require('../mockdata/specialists');

router.get('/', (req, res) => {
  res.send(specialists);
});

module.exports = router;
