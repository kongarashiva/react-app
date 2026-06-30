import React, { useState } from "react";
 
function App() {
  const products = [
    { id: 1, name: "Apple", price: "₹50,000" },
    { id: 2, name: "Mobile", price: "₹25,000" },
    { id: 3, name: "Headphones", price: "₹3,000" },
    { id: 4, name: "Smart Watch", price: "₹5,000" }
  ];
 
  const [cart, setCart] = useState(0);
 
  return (
    <div>
      <header style={{
        background: "#222",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h2>Shiva Store</h2>
        <h3>Cart: {cart}</h3>
      </header>
 
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center"
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.price}</p>
 
            <button
              onClick={() => setCart(cart + 1)}
              style={{
                padding: "10px",
                border: "none",
                background: "blue",
                color: "white",
                borderRadius: "5px"
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default App;
 
 
