import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <Header/>
    <div className="text-center mt-4">
    <p>404 Not Found</p>
    <Link to="/">Back to home</Link>
    </div>
    
    </>
  )
}

export default NotFound