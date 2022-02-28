import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from '../features/goals/goalSlice'
import { FaCheck, FaPencilAlt, FaTimes, FaTrashAlt } from 'react-icons/fa'
import { useEffect } from 'react'

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch()
  const input = useRef()

  const [isEditing, setIsEditing] = useState(false)
  const [currentGoal, setCurrentGoal] = useState(goal.text)

  const handleEditInputChange = e => {
    setCurrentGoal(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()

    if (!currentGoal) {
      setIsEditing(false)
    }
    const updateGoalData = {
      id: goal._id,
      text: currentGoal,
    }

    dispatch(updateGoal(updateGoalData))
  }

  useEffect(() => {
    if (isEditing) {
      input.current.focus()
    }
  }, [isEditing])

  return (
    <div className="goal">
      <div className="flex">
        {!isEditing && (
          <>
            <button className="mybtn" onClick={() => setIsEditing(true)}>
              <FaPencilAlt />
            </button>

            <button
              className="mybtn red"
              onClick={() => dispatch(deleteGoal(goal._id))}
            >
              <FaTrashAlt />
            </button>
          </>
        )}
      </div>
      {!isEditing && (
        <div className="date">
          {new Date(goal.createdAt).toLocaleString('sl-SI')}
        </div>
      )}
      <div className="form-group">
        {isEditing ? (
          <>
            <form onSubmit={onSubmit}>
              <div className="flex">
                <button className="mybtn" type="submit">
                  <FaCheck />
                </button>
                <button className="mybtn" onClick={() => setIsEditing(false)}>
                  <FaTimes />
                </button>
              </div>
              <div className="date">
                {new Date(goal.createdAt).toLocaleString('sl-SI')}
              </div>
              <input
                type="text"
                id="currentGoal"
                value={currentGoal}
                onChange={handleEditInputChange}
                ref={input}
              />
            </form>
          </>
        ) : (
          <h2>{goal.text}</h2>
        )}
      </div>
    </div>
  )
}

export default GoalItem
