import React, { useState, useEffect } from "react";
import "./index.css";
import Pizza from "./Pizza.jpg";

const Form = (props) => {
  const initialInputValues = [
    {
      size: "large",
      toppings: {
        pepperoni: false,
        sausage: false,
        mushroom: false,
        pineapple: false,
      },
      instructions: "",
      username: "",
    },
  ];

  const [inputValues, setInputValues] = useState(initialInputValues);


  const changeHandler = (event) => {
    // console.log(inputValue)

    setInputValues(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
  };

  return (
    <div className="formDiv">
      <header>Build Your Pizza</header>
      {/* <img src={Pizza}/> */}
      <form className="options-form" onSubmit={handleSubmit}>
        <label>
          Size:
          <select className="size-options" name="size">
            <option value="large" onChange={changeHandler}>
              Large
            </option>
            <option value="medium" onChange={changeHandler}>
              Medium
            </option>
            <option value="small" onChange={changeHandler}>
              Small
            </option>
          </select>
        </label>
        <div className="checkboxes" name="toppings" onChange={changeHandler}>
          <h3>Select Your Toppings:</h3>
          <input
            type="checkbox"
            name="pepperoni"
            value="Pepperoni"
            onChange={changeHandler}
          />
          <label>Pepperoni</label>
          <br></br>
          <input
            type="checkbox"
            name="sausage"
            value="
              Sausage"
            onChange={changeHandler}
          />
          <label>Sausage</label>
          <br></br>
          <input
            type="checkbox"
            name="mushroom"
            value="Mushroom"
            onChange={changeHandler}
          />
          <label>Mushroom</label>
          <br></br>
          <input
            type="checkbox"
            name="pineapple"
            value="Pineapple"
            onChange={changeHandler}
          />
          <label>Pineapple</label>
          <br></br>
        </div>
        <label>
          Special Instructions:
          <input type="text" name="instructions" onChange={changeHandler} />
        </label>
        <label>
          Your Name:
          <input type="text" name="username" values={props.username} onChange={changeHandler} />
        </label>
        <div className='center'>
        <button>Submit Your Order</button>
        </div>
       
      </form>
    </div>
  );
};

export default Form;
