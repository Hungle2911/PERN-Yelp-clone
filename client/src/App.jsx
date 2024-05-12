import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import RestaurantDetailsPage from './routes/RestaurantDetailsPage'
import UpdatePage from './routes/UpdatePage'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restaurants/:id/update' element={<UpdatePage />} />
      <Route path='/restaurants/:id' element={<RestaurantDetailsPage />} />
    </Routes>
  )
}

export default App
