import React, { useState, useEffect } from "react";
import "./index.css";
import Pizza from "./Pizza.jpg";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  size: yup.string(),
  toppings: yup.string(),
  pepperoni: yup.string(),
  sausage: yup.string(),
  mushroom: yup.string(),
  pineapple: yup.string(),
  instructions: yup.string(),
  username: yup
    .string()
    .min(2, "Name must include at least 2 characters")
    .required("Please enter your name"),

});

const Form = (props) => {
  const [errorState, setErrorState] = useState({
    size: "",
    toppings: {
      pepperoni: '',
      sausage: '',
      mushroom: '',
      pineapple: '',
    },
    instructions: "",
    username: "",
  });

  const [post, setPost] = useState([]);

  const validate = (event) => {
    console.log(event)
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrorState({ ...errorState, [event.target.name]: "" });
      })
      .catch((err) => {
        // console.log(err);
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0],
        });
      });
  };

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
    event.persist();
    validate(event);
    const name = event.target.name;
    const value = event.target.value;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValues);
    axios
      .post("https://reqres.in/api/users", inputValues)
      .then((response) => {
        // console.log(response.data)
        setPost(response.data);
      })
      .catch((err) => console.log("error"));
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
          <input
            type="text"
            name="username"
            values={props.username}
            onChange={changeHandler}
          />
        </label>
        <div className="center">
          <button>Submit Your Order</button>
        </div>
      </form>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default Form;
