import React, { useState, useEffect } from 'react'

const ApiTest = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://6947be521ee66d04a44dd010.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        console.log(data);
      })
     
      .catch(err => console.log(err));
  }, []);

  return (
    <div >
      
      
      <div className="grid grid-cols-4 gap-5">
        {products.map(product => (

          <div key={product.id} >

            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>

            <p>₹{product.price}</p>
            <p >{product.userName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApiTest

