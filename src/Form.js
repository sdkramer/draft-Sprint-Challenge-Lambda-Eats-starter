import React, { useState, useEffect } from "react";
import "./index.css";
import Pizza from "./Pizza.jpg";

const Form = () => {

  const [inputValue, setInputValue] = useState('')

  const changeHandler = event => {
    console.log(event.target.value)
  }
  return (
    <div className="formDiv">
      <header>Build Your Pizza</header>
      {/* <img src={Pizza}/> */}
        <form className="options-form">
          <label>
            Size:
            <select className="size-options">
              <option value="large" onChange={changeHandler}>Large</option>
              <option value="medium" onChange={changeHandler}>Medium</option>
              <option value="small" onChange={changeHandler}>Small</option>
            </select>
          </label>
        <div classname='checkboxes' onChange={changeHandler}>
          <h3>Select Your Toppings:</h3>
              <input type='checkbox' name='pepperoni' value='Pepperoni' onChange={changeHandler}/><label>Pepperoni</label>
              <br></br>
              <input type='checkbox' name='sausage' value='
              Sausage' onChange={changeHandler}/><label>Sausage</label>
             <br></br>
              <input type='checkbox' name='mushroom' value='Mushroom' onChange={changeHandler}/><label>Mushroom</label>
              <br></br>
              <input type='checkbox' name='pineapple' value='Pineapple' onChange={changeHandler}/><label>Pineapple</label>
              <br></br>
          </div>
          <label>
            Special Instructions:
            <input type="text" onChange={changeHandler}/>
          </label>
          <label>
            Your Name:
            <input type="text" onChange={changeHandler}/>
          </label>
        </form>
      </div>
  );
};

export default Form;
