import { useEffect, useState } from "react"

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Goi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounteđ
// 3. useEffect(callback, [dependencies])
// - callback sẽ được gọi mỗi khi dependencies thay đổi

// all 
// 1. callback luôn được gọi sau khi component mounted
// 2. cleanup function luôn được gọi trước khi component unmounted
// 3. cleanup function luôn được gọi trước khi callback được gọi (trừ trường hợp mount)

const lessions = [
    {
        id: 1,
        name: 'react js'
    },
    {
        id: 2,
        name: 'SPA/MPA'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function Content() {

    const [lessionId, setLessionId] = useState(1)

    useEffect(() => {
        const handleComment = (detail) => {
            console.log(detail)
        }
        window.addEventListener(`lession-${lessionId}`, handleComment)

        return () => {
            window.removeEventListener(`lession-${lessionId}`, handleComment)
        }
    }, [lessionId])

    return (
        <div>
            <ul>
                {
                    lessions.map(lession => (
                        <li key={lession.id}
                            style={{
                                color: lessionId === lession.id ? 'red': '#333'
                            }}
                            onClick={() => setLessionId(lession.id)}
                        >   
                            {lession.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Content