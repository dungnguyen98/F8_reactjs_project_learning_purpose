import { useState, useCallback } from 'react'

import Content from './Content'

// React.memo() được sử dụng để giảm số lần render component con không cần thiết. ví dụ <Content/> là component con.
// useCallback(callback, )

// handleIncrease là một đối tượng kiểu reference type, vì vậy mỗi lần Content được gọi thì nó truyền một object mới, do đó giữa 2 lần render <Content>, nó so sánh props là 2 đối tượng hoàn toàn khác nhau  (===) nên component (<Content>) được render.

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])



  return (
    <div className="App">
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
