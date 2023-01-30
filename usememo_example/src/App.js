import { useState, useMemo, useRef } from 'react'

// useMemo dùng khi render nhiều lần một đoạn code nhưng không cần thiết
//
function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])


  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])

    setName('')
    setPrice('')
    nameRef.current.focus()
    // console.log(nameRef)
  }

  // đoạn code render nhiều lần ko cần thiết: mỗi lần gõ chữ vào ô input thì hàm này render một lần, mỗi lần render thì total được tính toán lại một lần.
  // const total = products.reduce((result, prod) => {
  //   console.log('re-calculate')
  //   return result + prod.price
  // }, 0)

  const total = useMemo(() => {
    const rs = products.reduce((result, prod) => {
        console.log('re-calculate')
        return result + prod.price
      }, 0)
    
      return rs
  }, [products])

  return (
    <div className="App">
      <input 
        value={name}
        placeholder="Enter name..."
        ref={nameRef}
        onChange={e => setName(e.target.value)}
      />
      <br/>
      <input 
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
