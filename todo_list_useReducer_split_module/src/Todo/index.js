import { useReducer, useRef } from 'react'

import { addJob, setJob, deleteJob } from './actions'
import { initState, reducer } from './reducer'
import logger from './logger'

// 1. Init state


function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState)

  const {job, jobs} = state

  const inputRef = useRef()

  return (
    <div>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo...'
        onChange={e => dispatch(setJob(e.target.value))}
      />
      <button
        onClick={e => {
          dispatch(addJob(job))
          dispatch(setJob(''))
          inputRef.current.focus()
        }}

      >Add</button>

      <ul>
        {
          jobs.map((job, index) => 
            <li key={index}>
              {job}
              <span onClick={() => dispatch(deleteJob(index))}>
                &times;  
              </span>  
            </li>
        )}
        
      </ul>
    </div>
  );
}

export default App;
