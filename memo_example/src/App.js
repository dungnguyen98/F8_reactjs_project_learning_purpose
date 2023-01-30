import { useState, memo } from 'react'

import Content from './Content'

// React.memo() được sử dụng để giảm số lần render component con không cần thiết. ví dụ <Content/> là component con.
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const increase2 = () => {
    setCount2(count2 + 1)
  }

  var mod = count%3==0?'lol':null

  return (
    <div className="App">
      <Content mod = {mod}/>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me</button>
      <button onClick={increase2}>Click me2</button>
    </div>
  );
}

export default App;
