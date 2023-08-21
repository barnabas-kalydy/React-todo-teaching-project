import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch(
      "https://archive-api.open-meteo.com/v1/archive?latitude=48.1031&longitude=20.7781&start_date=2023-06-30&end_date=2023-07-14&hourly=temperature_2m"
    )
      .then((data) => data.json())
      .then((newData) => console.log(newData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* {countries.map((country) => (
        <div key={country.name} style={{ margin: "50px" }}>
          <div>{country.name}</div>
          <div>{country.capital}</div>
          <div>{country.population}</div>
        </div>
      ))} */}
    </>
  );
}

export default App;
