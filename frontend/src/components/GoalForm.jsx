import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

const GoalForm = () => {
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    if (!text) return

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </div>
  )
}

export default GoalForm
