import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomUser } from '../services/Api'

const useUserValue = () => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomUser();
        setUser(data)
        setLoading(false)
        setValue(`${data[0].name.first} ${data[0].name.last}`)
        setText("Hi, My name is")
      } catch (e) {
        console.log("Error while calling get Random User API", e);
      }
    };
    fetchData();
  }, []);

  const handleName = () => {
    setValue(`${user[0].name.first} ${user[0].name.last}`)
    setText("Hi, My name is")
  }
  const handleEmail = () => {
    setValue(`${user[0].email}`)
    setText("My email address is")
  }
  const handleDate = () => {
    setValue(`${user[0].registered.date.slice(0,10)}`)
    setText("My birthday is")
  }
  const handleDress = () => {
    setValue(`${user[0].location.street.name} ${user[0].location.street.number}`)
    setText("My address is")
  }
  const handlePhone = () => {
    setValue(`${user[0].cell}`)
    setText("My phone number is")
  }
  const handlePassword= () => {
    setValue(`${user[0].login.password}`)
    setText("My password is")
  }

  return {
    value,
    user,
    loading,
    text,
    handleName,
    handleEmail,
    handleDate,
    handleDress,
    handlePhone,
    handlePassword
  }
}

export default useUserValue