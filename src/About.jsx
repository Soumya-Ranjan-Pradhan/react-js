import React from 'react'

const About = ({name,age,email,myNames,arry}) => {
  return (
    <div>
      <h1>MyName:{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <h1>{myNames.names}</h1>
      <h1>{myNames.email}</h1>
      <h1>{arry[0]}</h1>
    </div>
  )
}

export default About