import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Form.module.css"


const Form = (props) => {

  const { id } = useParams();

  console.log()
  const API_URL = "https://swapi.dev/api";

  let select1 = "people";
  let input1 = 1;
  let object = {};
  const getData = async (category, id) =>{
    try {
      const response = await axios.get(`${API_URL}/${category}/${id}`)
      const data = await response.data
      object = data;
      console.log("object =", object )
      Object.entries(object).forEach(([key, value])=>{
        console.log(key, value)
        let p = document.createElement("p")
        p.append(`${key}: ${value}`)
        document.getElementById("data-container").append(p)
      })
    } catch (error) {
      console.log(error.message)
      let h1 = document.createElement("h1")
      h1.append("Estos no son los androides que estan buscando")
      document.getElementById("data-container").append(h1)
      let img = document.createElement("img")
      img.src = "https://pbs.twimg.com/tweet_video_thumb/COxp0vzWgAAxfzb.png"
      document.getElementById("data-container").append(img)
    }
  }

  const handleSelect = (e) => {
    const { value } = e.target;
    select1 = value;
  }

  const handleInput = (e) =>{
    const { value } = e.target;
    input1 = value;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    document.getElementById("data-container").innerHTML="";
    getData(select1, input1);
    console.log(Object.entries(object))
  }
  
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div className={styles["form-group"]}>
          <label>ELIJA EL SELECT: </label>
          <select onChange = { handleSelect }>
            <option value="people" key="people">people</option>
            <option value="films" key="films">films</option>
            <option value="starships" key="starships">starships</option>
            <option value="vehicles" key="vehicles">vehicles</option>
            <option value="species" key="species">species</option>
            <option value="planets" key="planets">planets</option>
          </select>
        </div>
          <div className={styles["form-group"]}>
            <label>ELIJA ID: </label>
            <input type="number" onChange={ handleInput } />
          </div>
          <button type='submit'>INGRESAR</button>
      </form>
      <div id='data-container' className={styles['data-container']}>
      </div>
    </div>
  );
}

export default Form;
