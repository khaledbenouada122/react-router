import React from 'react'
import Cardes from './Cardes'


const ListContact = ({list}) => {
  return (
    <div  class="cardes" style={{display:"flex"}}>
        
    {list.length?list.map(elm=><Cardes elm={elm}/>):<h2>Not found </h2>}
   
      

    </div>
  )
}

export default ListContact
