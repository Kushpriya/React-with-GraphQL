import React from 'react'
import CharacterList from './pages/CharacterList';
import Character from './pages/Character';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Helloo World!!</h1>
      <Routes>
        <Route strict exact path = "/" Component={CharacterList} />
        <Route strict exact path = "/:id" Component={Character} />
      </Routes>
    </div>
  )
}

export default App
