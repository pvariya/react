import React, { useState } from 'react'
import { use } from 'react'
import API from './config/Api'
import Showdata from './Showdata'

const Todo = () => {
    const [data, setData] = useState({
        id: null,
        name: '',
        grid: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.id) {
            updateData(data)
        } else {
            creatData(data)
        }
        setData({
            id: null,
            name: '',
            grid: ''
        })
    }

    const updateData = async (data) => {
        await API.patch(`/todos/${data.id}`, { name: data.name, grid: data.grid });
    };

    const handalUpadte = (todo) => {
        setData({
            id: todo.id,
            name: todo.name,
            grid: todo.grid,
        });
    }

    const creatData = async (data) => {
        let res = await API.post('/todos', data)
    }

    const deleteData = async (id) => {
        try {
          await API.delete(`/todos/${id}`);
        } catch (err) {
          console.error('Error deleting todo:', err);
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} name='name' value={data.name} placeholder='name' />
                <input type="text" onChange={handleInputChange} name='grid' value={data.grid} placeholder='grid' />
                <button type='submit'>{data.id ? 'Update' : 'add'}</button>
            </form>
            <hr />

            <Showdata handalUpadte={handalUpadte} deleteData={deleteData} />
        </div>
    )
}

export default Todo