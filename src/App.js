import React, { useState } from "react";
 
function App() {
  const [isLogin, setIsLogin] = useState(true);
 
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f4f4f4"
    }}>
      <div style={{
        width: "350px",
        padding: "30px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ textAlign: "center" }}>
          {isLogin ? "Login" : "Register"}
        </h2>
 
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            style={inputStyle}
          />
        )}
 
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />
 
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />
 
        <button style={buttonStyle}>
          {isLogin ? "Login" : "Register"}
        </button>
 
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "5px"
            }}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
 
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px"
};
 
const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
 
export default App;
 
