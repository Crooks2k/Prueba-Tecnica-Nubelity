import axios from "axios";

export const getRandomUser = async () => {
    try {
      const data = await axios.get(import.meta.env.VITE_RANDOM_USER);
      return data.data.results
    } catch (e) {
      console.log("Error while calling get Random User API", e);
    }
};

export const getRandomUserByNationality = async () => {
  try {
    const data = await axios.get(import.meta.env.VITE_RANDOM_USER_NATIONALITY1);
    const data2 = await axios.get(import.meta.env.VITE_RANDOM_USER_NATIONALITY2);
    const data3 = await axios.get(import.meta.env.VITE_RANDOM_USER_NATIONALITY3);
    const users = {
      us: data.data.results[0],
      dk: data2.data.results[0],
      fr: data3.data.results[0]
    };

    return users;
  } catch (e) {
    console.log("Error while calling get Random User by nationality API", e);
  }
};

export const getRandomUserByNationalityID = async (nationality) => {
  try {
    const data = await axios.get(`https://randomuser.me/api/?nat=${nationality}&results=1`)

    return data.data.results[0]
  } catch (e) {
    console.log("Error while calling get Random User by nationality API", e);
  }
};