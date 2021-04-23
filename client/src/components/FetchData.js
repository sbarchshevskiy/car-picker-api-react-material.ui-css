import React, { useEffect, useState } from "react";
import axios from "axios";
require("dotenv").config();


export default function FetchData() {
  const [makes, setMakes] = useState([]);
  const [brand, setBrand] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${url}${brand}/vehicleType/car?format=json`)
      .then((res) => {
        console.log(res.data);
        setMakes(res.data["Results"]);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, [url, brand]);

  if (makes) {
    return (
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');
        </style>
        <input
          className="user-input"
          type="text"
          placeholder="Search vehicle makes"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}>
        </input>
  
        <div className="container">
          {makes.map((data, key) => {
            return (
              <div key={key}>
                {data.Model_Name +
                  " , " +
                  data.Model_ID}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
