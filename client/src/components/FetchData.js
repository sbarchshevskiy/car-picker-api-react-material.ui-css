import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
require("dotenv").config();

export default function FetchData() {
  const [makes, setMakes] = useState([]);
  const [brand, setBrand] = useState([]);
  const [searchMatch, setSearchMatch] = useState([]);

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


  const autoComplete = (input) => {
    let matches = makes.filter((make) => {
      const regex = new RegExp(`${input}, "gi"`);
      return make.Make_Name.match(regex);
    });
    setSearchMatch(matches);
  }

  if (makes) {
    return (
      <div>
        <body>
          <input
            className="user-input"
            type="text"
            placeholder="Search vehicle makes"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
          {searchMatch && searchMatch.map((data, key) => (
            <div>
              {data.Model_Name}
            </div>
          ))}
        </body>
        <div className="container">
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
  } else {
    return <div>loading...</div>;
  }
}
