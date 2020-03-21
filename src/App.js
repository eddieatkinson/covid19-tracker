import React, { useState, useEffect } from "react";
import { states } from "./utilities";
import { map, findLast } from "lodash";

function App() {
  const [data, setData] = useState([]);
  // const [useLocation, setUseLocation] = useState(false);
  const [userLocation, setUserLocation] = useState();
  const [usState, setUsState] = useState();
  const [stateData, setStateData] = useState();

  useEffect(() => {
    console.log("running");
    // navigator.geolocation.getCurrentPosition(position =>
    //   console.log(position)
    // );
    const country = "us";
    const status = "confirmed";
    fetch(
      `https://api.covid19api.com/dayone/country/${country}/status/${status}`
    )
      .then(response => {
        return response.json();
      })
      .then(dataReturned => {
        setData(dataReturned);
        console.log(dataReturned);
      });
  }, []);

  const updateInput = e => {
    // setUseLocation(e.target.checked);
  };
  console.log(data);
  function handleInput(e) {
    setUsState(e.target.value);
    const latestInfo = findLast(data, datum => {
      return datum.Province === e.target.value;
    });
    const stateInfo = latestInfo
      ? latestInfo.Cases
      : "Information not available";
    setStateData(stateInfo);
  }

  return (
    <div>
      <form>
        <label>Select a state:</label>
        <select onChange={handleInput} id="states">
          <option>Select a state...</option>
          {map(states, (state, i) => {
            return (
              <option key={i} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </form>
      <p>{usState}</p>
      <p>{stateData}</p>
    </div>
  );
}

export default App;
