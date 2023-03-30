import axios from "axios";

const randomUserURI = import.meta.env.VITE_RANDOM_USER;

export const getRandomUser = async () => {
    try {
      const data = await axios.get(randomUserURI);
      return data.data.results
    } catch (e) {
      console.log("Error while calling get Random User API", e);
    }
};