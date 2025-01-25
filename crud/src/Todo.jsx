import React, { useEffect, useState } from 'react'
import { use } from 'react'
import API from './config/Api'
import Showdata from './Showdata'

const Todo = () => {
    const [data, setData] = useState({
        id: '',
        name: '',
        grid: ''
    })

    const [update, setIsUpdate] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (setIsUpdate) {
            updateData(data)
        } else {
            creatData({
                ...data,
                id: Date.now().toString()
            })
        }
        setData({
            id: '',
            name: '',
            grid: ''
        })
        setIsUpdate(false)
    }


    const updateData = async (data) => {
        let res = await API.put(`/todos/${data.id}`, data)
    }
    const handalUpadte = () => {
        setData(data)
        setIsUpdate(true)

    }

    const creatData = async (data) => {
        let res = await API.post('/todos', data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input required type="text" onChange={handleInputChange} name='name' value={data.name} placeholder='name' />
                <input required type="text" onChange={handleInputChange} name='grid' value={data.grid} placeholder='grid' />
                <button type='submit'>{'add'}</button>
            </form>
            <hr />

            <Showdata handalUpadte={handalUpadte} />
        </div>
    )
}

export default Todo