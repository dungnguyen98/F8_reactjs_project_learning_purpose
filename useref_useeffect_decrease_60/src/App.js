import { useState, useRef, useEffect } from 'react'
// sử dụng useRef trong trường hợp này giống như sử dụng timerId ở bên ngoài (biến toàn cục). 
// Trong thực tế, khi code react ta không nên làm như vậy.

// let timerId

function App() {

  const [count, setCount] = useState(60)

  // const ref = useRef(99)
  // console.log(ref)
  const timerId = useRef()

  const preCount = useRef()

  useEffect(() => {
    preCount.current = count
    console.log("Inside useEffect: ", count)
  }, [count])

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    console.log(timerId.current)
    clearInterval(timerId.current)
  }

  console.log(count, preCount.current)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ handleStart }>Start</button>
      <button onClick={ handleStop }>Stop</button>
    </div>
  );
}

export default App;
