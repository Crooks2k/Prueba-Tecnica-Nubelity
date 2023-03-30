import React from 'react'
import Header from '../../components/layouts/Header/Header'
import Container from 'react-bootstrap/Container';
import "./Home.css"
import {BiUser} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineCalendar} from "react-icons/ai"
import {RiRoadMapLine} from "react-icons/ri"
import {AiOutlinePhone} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"
import useUserValue from '../../hooks/useUserValue';

const Home = () => {

  const { value, user, loading, text, handleName, handleEmail, handleDate, handleDress, handlePhone, handlePassword } = useUserValue();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header/>

      <Container className="randomUser text-center">
        <div className="background-cotainer"></div>
        <img src={user[0].picture.large} className="random-user-img"/>
        <p className="Welcome-text">{text}</p>
        <p className="user-name">{value}</p>

        <div className="user-buttons">
          <BiUser onClick={handleName} />
          <AiOutlineMail onClick={handleEmail} />
          <AiOutlineCalendar onClick={handleDate} />
          <RiRoadMapLine onClick={handleDress} />
          <AiOutlinePhone onClick={handlePhone} />
          <AiOutlineLock onClick={handlePassword} />
        </div>
     </Container>

    </>
  )
}

export default Home