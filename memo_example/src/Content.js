import React from 'react'

function Content({count}) {
    console.log('re-render')
    return (
        <h2>Hello ae</h2>
    )
}

export default React.memo(Content)