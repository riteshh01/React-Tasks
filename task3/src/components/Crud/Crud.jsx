import React, { useState } from 'react'
import './Crud.css'
import Confetti from '../Confetti/Confetti.jsx'

const Crud = () => {

  // input ka data
  const [product, setProduct] = useState("");

  // products list
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div className="crud">

        <input
          type="text"
          value={product}
          placeholder="Enter product name"
          onChange={(e) => setProduct(e.target.value)}
        />

        <button className='btn' onClick={() => {
          if (product.trim() === ""){
            alert("Kuch to Likho Bhai");
            return ;
          }

          setProducts([...products, product]); // ADD
          setProduct(""); // input clear
        }}>
          Add
        </button>

      </div>

      {/* Products List */}
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item}

            <button
              className='btn'
              onClick={() => {
                // DELETE
                setProducts(products.filter((_, i) => i !== index)); // (element, index) 

                // optional confetti
                Confetti();
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Crud