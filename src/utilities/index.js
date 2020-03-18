import axios from "axios";
export async function fetchData(country, status) {
  try {
    const response = await axios.get(
      `https://api.covid19api.com/dayone/country/${country}/status/${status}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
