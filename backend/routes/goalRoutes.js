const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, setGoal).get(protect, getGoals)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router
