const express = require('express');
const router = express.Router();
const {
  createSpecialist,
  getSpecialists,
  deleteSpecialist,
} = require('../controllers/specialistController');

router.route('/').get(getSpecialists).post(createSpecialist);
router.route('/:id').delete(deleteSpecialist);

module.exports = router;
