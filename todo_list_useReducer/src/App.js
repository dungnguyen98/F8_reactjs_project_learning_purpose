import { useReducer, useRef } from 'react'

// 1. Init state
const initState = {
  job: '',
  jobs: []
}

// 2. actions

const SET_JOB = 'set_job'

const setJob = payload => {
  return {
    type: "set_job",
    payload
  }
  
}

const ADD_JOB = 'add_job'

const addJob = payload => {
  return {
    type: 'add_job',
    payload
  }
  
}


const DELETE_JOB = 'delete_job'
const deleteJob = payload => {
  return {
    type: 'delete_job',
    payload
  }
  
}



// 3. Reducer

const reducer = (state, action) => {
  switch(action.type){
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    break
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    break
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job, index) => index !== Number(action.payload))
      }
    break
  }
} 

// 4. dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  const {job, jobs} = state

  const inputRef = useRef()

  console.log(job, jobs)

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
