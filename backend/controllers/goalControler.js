const asyncHandler = require('express-async-handler')

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.value) {
    res.status(400)
    throw new Error('please add a value field')
  }
  res.status(200).send(req.body)
})

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).send({
    message: 'Get goals',
  })
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).send({
    message: `Update goal ${req.params.id}`,
  })
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).send({
    message: `Delete goal ${req.params.id}`,
  })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
