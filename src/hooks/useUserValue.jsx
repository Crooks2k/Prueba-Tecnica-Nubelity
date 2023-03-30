import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomUser } from '../services/Api'

const useUserValue = () => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomUser();
        setUser(data)
        setLoading(false)
        setValue(`${data[0].name.first} ${data[0].name.last}`)
      } catch (e) {
        console.log("Error while calling get Random User API", e);
      }
    };
    fetchData();
  }, []);

  const handleName = () => {
    setValue(`${user[0].name.first} ${user[0].name.last}`)
  }
  const handleEmail = () => {
    setValue(`${user[0].email}`)
  }
  const handleDate = () => {
    setValue(`${user[0].registered.date.slice(0,10)}`)
  }
  const handleDress = () => {
    setValue(`${user[0].location.street.name} ${user[0].location.street.number}`)
  }
  const handlePhone = () => {
    setValue(`${user[0].cell}`)
  }
  const handlePassword= () => {
    setValue(`${user[0].login.password}`)
  }

  return {
    value,
    user,
    loading,
    handleName,
    handleEmail,
    handleDate,
    handleDress,
    handlePhone,
    handlePassword
  }
}

export default useUserValue