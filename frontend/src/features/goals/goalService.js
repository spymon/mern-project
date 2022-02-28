import axios from 'axios'

const API_URL = '/api/goals/'

// Create new goal
const create = async (goalData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } }
  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async token => {
  const config = { headers: { Authorization: `Bearer ${token}` } }
  const response = await axios.get(API_URL, config)

  return response.data
}

// Update goal
const updateGoal = async (goalData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } }
  const { id, text } = goalData
  const updateText = { text }

  const response = await axios.put(API_URL + id, updateText, config)

  return response.data
}

// Delete goal
const deleteGoal = async (goalId, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } }
  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

const goalsService = {
  create,
  getGoals,
  updateGoal,
  deleteGoal,
}

export default goalsService
