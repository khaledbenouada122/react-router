import React from 'react'

const Cardes = ({elm}) => {
  return (
    <div>
     <h2>{elm.id}</h2>
     <h2>{elm.name}</h2>
     <h2>{elm.adresse}</h2>
     <h2>{elm.mail}</h2>
     <h2>{elm.tel}</h2>
     <img src={elm.photo}></img>
  
    </div>
  )
}

export default Cardes
