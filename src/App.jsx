import React from 'react'
import { BioProvider } from './assets/ContextApi'
import Home from './assets/ContextApi/Home'

const App = () => {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  )
}

export default App
