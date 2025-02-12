import React, { useContext } from 'react'
import { BioContext } from '.';

const Home = () => {
    const {myName,myBioData} = useContext(BioContext);
  return (
    <div>
        <h1>My Name is {myName}</h1>
        <h2>{myBioData}</h2>
    </div>
  )
}

export default Home