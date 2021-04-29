import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

require("dotenv").config();
const url = process.env.REACT_APP_API_URL;

export default function FetchData() {
  const [makes, setMakes] = useState([]);
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}${brand}/vehicleType/car?format=json`)
      .then((res) => {
        //loads car maker
        console.log("Maker: ", res.data["Results"][0].Make_Name);
        setMakes(res.data["Results"]);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, [brand]);
    return (
      <div>
        <body>
          <input
            className="user-input"
            type="text"
            placeholder="Search vehicle makes"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
        </body>

        <div>
          {makes
            .filter((res) => res.Make_Name.toLowerCase() === brand)
            .map((data, key) => {
              return (
                <div>
                  <Cards
                    model={data.Model_Name}
                    id={data.Model_ID}
                    make={data.Make_Name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  
}
