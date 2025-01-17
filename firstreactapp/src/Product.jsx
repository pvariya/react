import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Product = () => {

    const [data, setdata] = useState([])
    const getProduct = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        setdata(res.data.products)
    }

    useEffect(()=>{
        getProduct()
        console.log(data);
        
    },[])


    return (
        <div>Product</div>
    )
}


export default Product