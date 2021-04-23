import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FetchData() {

  const [makes, setMakes] = useState([])
  const [brand, setBrand] = useState([])


  // const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${brand}/vehicleType/car?format=json`

  useEffect(() => {
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${brand}/vehicleType/car?format=json`)
      .then(res => {
        console.log(res.data);
        setMakes(res.data['Results'])
      })
      .catch(err => {
        console.log('ERROR: ',err)
      });
  }, [brand])

  if(makes) {
    return(
      <div>
        <input type="text" value={brand} onChange={event => setBrand(event.target.value)}></input>
        <div className="stock-container">
          {makes.map((data, key) => {
            return (
              <div key={key}>
                {data.Make_ID +
                  " , " +
                  data.Make_Name +
                  " ," +
                  data.Model_Name +
                  ", " +
                  data.VehicleTypeName}
              </div>
            );
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        loading...
      </div>
    )
  }


  
}

