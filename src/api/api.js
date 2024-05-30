import axios from "axios";

const getRandomQuotes = async () => {
  try {
    const response = await axios.get("https://api.quotable.io/quotes/random");
    return response.data
  } catch (error) {
    console.log(error);
  }
};

export default getRandomQuotes;
