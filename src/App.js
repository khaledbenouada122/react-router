
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import ListContact from './componenet/ListContact';
import Searchs from './componenet/Searchs';
import ADDcontact from './componenet/ADDcontact';
import { Route, Routes } from 'react-router-dom';
import Cardes from './componenet/Cardes';
import { Button } from 'react-bootstrap';
import Description from './componenet/Description';
import Des from './componenet/Des';





function App() {
  const[Filter,setFilter]=useState("")
  const[contactList,setcontactlist]=useState([{
   
    id:1,
    
    title: "Let Girls Dream",
    description:" The short tells the story of Pari, a 14-year-old girl who dreams of becoming a pilot while growing up in a society that doesn't allow her to dream",
    posteURL:"https://i.egycdn.com/pic/WmFwZndlY21ZcFlFbW1tWWpFY21URXZjbG1ibVRFbXo.jpg",
    rating: " 5",
    
  
   

  },
  {
    id:2,
 
    title:"Sweetie, You Won't Believe It",
    description:"Dastan can no longer stand the constant nagging of his highly pregnant wife and decides to run away for at least one day with his friends . The men go fishing, which would have gone smoothly, if not for a series of unforeseen events.",
    posteURL:"https://i.egycdn.com/pic/WmFwZndlY21tbWJtYm1ibUVtcGJFY21qdmNtVG1tYlBtbW1q.jpg",
    rating: " 3",
  },
  {
  id:3,
  
  title:"Whale Island  ",
  description:" Taiwan is an island country. Although it is surrounded by the sea, its people fear the sea since the politics, the history and the religious beliefs held on this island make people turn their backs to the sea. Oceanic literature auth",
  posteURL:"https://i.egycdn.com/pic/WmFwZndlY21ZVEVtbW1tbXZ2UmNtcGp2d2xhY056YQ.jpg",
  rating: " 5",
 },
 {
  id:4,
  title:"Choked", 
  description:"تكتشف موظفة مصرف تكبّلها ديون زوجها العاطل وأحلامها المحطمة مصدرًا سريًّا لكنز لا ينضب من الأموال النقدية في منزلها، فهل يكون مصدر سعادتها؟",
  posteURL:"https://i.egycdn.com/pic/WmFwZndlY21ZbXZOYnZjbWJtZWNtVG13Q2pQbVl2bWI.jpg",
  rating: "4 ",
},
])
const HandleFilter=(val)=>{
  setFilter(val)
  


}
const handleADDcontact=(val)=>{
  setcontactlist([...contactList,val])
}
  return (

    <div className="App">
      <header className='App-header'>
      <Searchs HandleFilter={HandleFilter} ></Searchs>
      <a href='Movie'>Movie</a>
  <Routes>

        <Route path='/Movie' element={<Description/>}/>
     <Route path="/" element={<>
    
        <ListContact list={contactList.filter(elm=>elm.title.toUpperCase().includes(Filter.toUpperCase()))} ></ListContact>
     <ADDcontact handleADDcontact={handleADDcontact}></ADDcontact>
     </>}/>

     
      


        <Route path='Description/:movieid' element={<Description contactList={contactList}/>}/>
           
            
        </Routes>
          
    
     
      
      
      </header>
   
    </div>
  );
}

export default App;
