import { useLayoutEffect, useState } from "react"

// useLayoutEffect có chức năng giống hệt useEffect, chỉ khác về thứ tự thực hiện. Dưới đây là thứ tự thực hiện của từng loại
//
// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu dependencies thay đổi
// 5. Gọi useEffect callback 

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu dependencies thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI


function Content() {

    const [count, setCount] = useState(0)


    useLayoutEffect(() => {
        if(count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default Content