// High Order Component(HOC)

// App jsx
import React from 'react'
import WithLoader from './WithLoader'
import User from './User'
import "../styles/App.css"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const UserWithLoader = WithLoader(User)
  return (
    <>
      <UserWithLoader />
    </>
  )
}

export default App

