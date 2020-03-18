import React, { useState, useEffect } from "react";
import { fetchData } from "./utilities";

function App() {
  const [data, setData] = useState(["people", "temple"]);
  const [useLocation, setUseLocation] = useState(false);
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        console.log(position)
      );
      fetchData("us", "confirmed");
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });

  const updateInput = e => {
    setUseLocation(e.target.checked);
  };

  return (
    <div>
      <form>
        <label>
          Use current location:
          <input name="useLocation" type="checkbox" onChange={updateInput} />
        </label>
      </form>
    </div>
  );
}

export default App;
