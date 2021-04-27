import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import TransitionsModal from "./TransitionsModal";

require("dotenv").config();

export default function FetchData() {
  const [makes, setMakes] = useState([]);
  const [brand, setBrand] = useState([]);

  console.log(makes);

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
        <body>
          <input
            className="user-input"
            type="text"
            placeholder="Search vehicle makes"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          ></input>
        </body>
        <div className="container">
          {makes
            .filter((res) => res.Make_Name.toLowerCase() === brand)
            .map((data, key) => {
              return (
                // <div key={key}>
                <div>
                  <Cards
                    model={data.Model_Name}
                    id={data.Model_ID}
                    make={data.Make_Name}
                  ></Cards>
                </div>
              );
            })}
            <div>
              {
                makes.map((nonFilteredData, nfkey) => {
                  return (
                    <div>
                      <TransitionsModal
                        model={nonFilteredData.Model_Name}>
                      </TransitionsModal>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
