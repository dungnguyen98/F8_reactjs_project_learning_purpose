import { useState, useRef } from 'react'
// sử dụng useRef trong trường hợp này giống như sử dụng timerId ở bên ngoài (biến toàn cục). 
// Trong thực tế, khi code react ta không nên làm như vậy.

// let timerId

function App() {

  const [count, setCount] = useState(60)

  // const ref = useRef(99)
  // console.log(ref)
  let timerId = useRef()

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    console.log(timerId.current)
    clearInterval(timerId.current)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ handleStart }>Start</button>
      <button onClick={ handleStop }>Stop</button>
    </div>
  );
}

export default App;
