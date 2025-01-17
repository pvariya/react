import React, { useState } from 'react'

const Todo = () => {
    const [data, setData] = useState({
        name: '',
        grid: '',
        id: Date.now(),
        isComplete: false
    })

    const handalInput = (e) => {


    }

    
    const onSubmit = (e) => {
        e.prevenDefault()
    }



    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='name' onChange={handalInput} />
                <input type="text" placeholder='grid' onChange={handalInput} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Todo