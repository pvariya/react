import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [data, setData] = useState([])
    const getProduct = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        setData(res.data.products)
    }

    useEffect(() => {
        getProduct()
        console.log(data);
    }, [setData])
    return (
        <div className="product-container">
            {data.map((ele) => (
                <div className="product-card" key={ele.id}>
                    <img className="product-thumbnail" src={ele.thumbnail} alt={ele.title} />
                    <h2 className="product-title">{ele.title}</h2>
                    <p className="product-description">This is a great product that you will love!</p>
                    <p className="product-price">Price: ${ele.price}</p>
                    <button className="buy-button">Buy Now</button>
                </div>
            ))}
        </div>
    )
}

export default Product