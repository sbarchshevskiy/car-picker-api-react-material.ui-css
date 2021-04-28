import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Card from "@material-ui/core/Card";


require("dotenv").config();

export default function FetchData() {
  const [makes, setMakes] = useState([]);
  const [brand, setBrand] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    //alternative can be using Promise.all
    axios
      .get(`${url}${brand}/vehicleType/car?format=json`)
      .then((res) => {
        //loads car maker
        console.log('Maker: ',res.data["Results"][0].Make_Name);
        setMakes(res.data["Results"])
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, [url, brand]);

  // autocomplete function
  // const [searchMatch, setSearchMatch] = useState([]);
  // const autoComplete = (input) => {
  //   let matches = makes.filter((make) => {
  //     //regex gi modifier is a case insensitive search
  //     const regex = new RegExp(`${input}, "gi"`);
  //     console.log('matches:', make.Make_Name)
  //     return make.Make_Name.match(regex);
  //   });
  //   setSearchMatch(matches);
  // }
  // inside jsx
  // autoComplete(setBrand(event.target.value))

  if (makes) {
    return (
      <div>
        <body>
          <input
            className="user-input"
            type="text"
            placeholder="Search vehicle makes"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value)
            }}
          />
          {/*{searchMatch && searchMatch.map((data, key) => (*/}
          {/*  <div key={key} style={{marginTop: "5px"}}>*/}
          {/*    <Card style={{width: "50%"}} out={data.Model_Name}/>*/}
          {/*    {data.Model_Name}*/}
          {/*  </div>*/}
          {/*))}*/}
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
