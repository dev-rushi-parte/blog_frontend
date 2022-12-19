import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateAuth from '../Component/PrivateRoute/PrivateRoute'
import SignIn from '../Pages/Account/SignIn'
import SignUp from '../Pages/Account/SignUp'
import BlogFeed from '../Pages/BlogFeed'
import HomePage from '../Pages/HomePage'
import Profile from '../Pages/Profile'
import WriteBlog from '../Pages/WriteBlog'

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />

        <Route path='/feed' element={<PrivateAuth><BlogFeed /></PrivateAuth>} />
        <Route path='/profile' element={<PrivateAuth><Profile /></PrivateAuth>} />
        <Route path='/write' element={<PrivateAuth><WriteBlog /></PrivateAuth>} />
      </Routes>
    </>
  )
}

export default MainRoutes
