import { Button } from 'bootstrap'
import React from 'react'
import { Link,Outlet, useNavigate,useParams} from 'react-router-dom'

const Description = ({contactList}) => {
  const navigate = useNavigate()
  const params =   useParams()
  const movie = contactList.find(el=>el.id === +params.movieid)
  console.log(movie)
  const godes=()=>{
    navigate("/")
  }
  return (
    <div>
       {/* <Outlet/>
        <Link to='/Des'>Description</Link> */}
        <p>{movie.description}</p>
      
        {/* <Button onClick={godes}></Button> */}
       
    </div>
  )
}

export default Description