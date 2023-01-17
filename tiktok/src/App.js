import logo from './logo.svg';
import './App.css';
import { useStore, actions } from './store'

function App() {

  const [state, dispatch ] = useStore();

  const { todos, todoInput } = state
  
  const handleClick = () => {
    dispatch(actions.add_todo(todoInput))
  }

  console.log(todos);

  return (
    <div className="App">
      <input
        value={todoInput}
        placeholder="Enter todo...."
        onChange={e => {
          dispatch(actions.set_todo_input(e.target.value))
        }}
      />
      <button onClick={handleClick}>Add</button>
        {todos.map((todo, index) => 
          <li key={index}>Hi: {todo}</li>
        )}
    </div>
  );
}

export default App;
