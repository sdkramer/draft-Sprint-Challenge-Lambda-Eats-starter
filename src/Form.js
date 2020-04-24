import React, { useState, useEffect } from "react";
import "./index.css";
import Pizza from "./Pizza.jpg";

const Form = () => {

  const [inputValue, setInputValue] = useState('')

  const changeHandler = event => {
    console.log(event)
  }
  return (
    <div className="formDiv">
      <header>Build Your Pizza</header>
      {/* <img src={Pizza}/> */}
        <form className="options-form">
          <label>
            Size:
            <select className="size-options">
              <option value="large">Large</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
            </select>
          </label>
        <div classname='checkboxes'>
          <h3>Select Your Toppings:</h3>
              <input type='checkbox' name='pepperoni' value='Pepperoni'/><label>Pepperoni</label>
              <br></br>
              <input type='checkbox' name='sausage' value='
              Sausage'/><label>Sausage</label>
             <br></br>
              <input type='checkbox' name='mushroom' value='Mushroom'/><label>Mushroom</label>
              <br></br>
              <input type='checkbox' name='pineapple' value='Pineapple'/><label>Pineapple</label>
              <br></br>
          </div>
          <label>
            Special Instructions:
            <input type="text" />
          </label>
          <label>
            Your Name:
            <input type="text" />
          </label>
        </form>
      </div>
  );
};

export default Form;
