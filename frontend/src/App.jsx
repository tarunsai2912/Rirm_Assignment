import React from 'react'
import { Route, Routes } from 'react-router-dom'
import URLDuplicationTool from './UrlDuplicationTool'
import WeatherTool from './WeatherTool'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<URLDuplicationTool />} path='/'></Route>
        <Route element={<WeatherTool />} path='/weather'></Route>
      </Routes>
    </div>
  )
}

export default App
