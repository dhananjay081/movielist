import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Headers/header'
import Home from './Components/home/home'
import Movielist from './Components/movieList/movielist'
import Movie from './Components/movieDetail/movie'

function App() {
  return (
    <div className='w-full h-full bg-zinc-800 text-slate-300'>
       <Router> 
        <Header/>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='movie/:id' element={<Movie/>}></Route>
              <Route path='movies/:type' element={<Movielist/>}></Route>
              <Route path='/*' element={<h1>Error Page</h1>}></Route>
          </Routes>
       </Router>
    </div>
  )
}

export default App