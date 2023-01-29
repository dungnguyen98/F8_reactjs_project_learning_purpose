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

function Content() {

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreview = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }



    return (
        <div>
            <input type="file" onChange={handlePreview}/>
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )
}

export default Content