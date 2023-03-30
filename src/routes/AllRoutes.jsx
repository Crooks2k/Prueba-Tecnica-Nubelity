import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Userlist from '../pages/Users/Userlist'
import UserNationality from '../pages/Users/UserNationality'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Userlist/>} />
      <Route path="/users/:id" element={<UserNationality/>} />
    </Routes>
    </>
  )
}

export default AllRoutes