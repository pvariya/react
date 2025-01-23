import React, { useEffect, useState } from 'react'
import { use } from 'react'
import API from './config/Api'

const Showdata = ({ handalUpadte, deleteData }) => {
    const [data, setData] = useState([])
    const get = async () => {
        const res = await API.get("/todos")
        setData(res.data)
    }

    useEffect(() => {
        get()
    }, [data])


    const handalDelete = async (id) => {
        await deleteData(id)
        get()

    }
    return (
        <div> {
            data.map((ele) => (
                <div key={ele.id}>
                    <h2>{ele.name}</h2>
                    <p>{ele.grid}</p>
                    <button onClick={() => handalUpadte(ele)} >Edit</button>
                    <button onClick={() => handalDelete(ele.id)}>delete</button>
                </div>
            ))
        }</div>
    )
}

export default Showdata