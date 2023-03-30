import React from 'react'
import Header from '../../components/layouts/Header/Header'
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { getRandomUserByNationality } from '../../services/Api';
import { Link } from 'react-router-dom';
import "./Styles/Userlist.css"

const Userlist = () => {

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomUserByNationality();
        setUserData(data)
        setLoading(false)
      } catch (e) {
        console.log("Error while calling get Random User API", e);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header/>
    <Container className="randomUserNationalitys text-center">
      <Link to="/users/us"><button>Estados Unidos [us]</button></Link>
      <Link to="/users/dk"><button>Dinamarca [dk]</button></Link>
      <Link to="/users/fr"><button>Francia [fr]</button></Link>
    </Container>
    </>
  )
}

export default Userlist