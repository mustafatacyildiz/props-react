import React from 'react'
import Msg from "./Msg"

const Person = ({ name, img, tel }) => {
    // const { name, img, tel } = props
  return (
    <div>
        <Msg isim={name}/>
        <img src={img} alt="" />
        <p>{tel}</p>
    </div>
  )
}

export default Person;