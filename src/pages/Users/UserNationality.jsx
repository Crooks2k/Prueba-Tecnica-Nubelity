import Header from '../../components/layouts/Header/Header'
import React, { useEffect, useState } from 'react';
import { getRandomUserByNationalityID } from '../../services/Api';
import { useParams } from 'react-router-dom';
import "./Styles/UserNationality.css"
import Container from 'react-bootstrap/Container';

const UserNationality = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { nationality } = useParams();
  console.log(nationality)

  useEffect(() => {
    const fetchUsersNationality = async () => {
      const data = await getRandomUserByNationalityID(nationality);
      setUser(data);
      setLoading(false)
    };
    fetchUsersNationality();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header/>

    <Container className="randomUserNationality text-center">
    <div className="background-cotainer"></div>
        <img src={user.picture.large} className="random-user-img"/>
        <p className="Welcome-text">Hi, My name is</p>
        <p className="user-name">{user.name.first}</p>
     </Container>
    </>
  );
}

export default UserNationality