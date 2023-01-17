import { useReducer } from 'react'

// 1. Init state
const initState = {
  job: '',
  jobs: []
}

// 2. actions

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

// 3. Reducer

const reducer = (state, action) => {
  //
} 

// 4. dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState)


  return (
    <div>
      <h3>Todo</h3>
      <input
        placeholder='Enter todo...'
      />
      <button>Add</button>

      <ul>
        <li>Rua bat</li>
      </ul>
    </div>
  );
}

export default App;
