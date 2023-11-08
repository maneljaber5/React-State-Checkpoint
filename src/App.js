
import image from './manel.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const [person, setperson] = useState({ 
    FULLNAME:"Manel jaber" ,
    BIO: "student",
    img: image,
    profession:"Student"

  })
  const [show, setshow] = useState(false)
  return (
    // <div>
    //   <div className='btn'>
    //   <button onClick={()=> setshow(!show)}> Show </button>
    //  </div>
    // {show? <div className='card'>
    //  <img src={person.img} />
    //  <h3>FullName: {person.FULLNAME}</h3>
    //  <h5>Bio: {person.BIO}</h5>
    //  <p>Profession: {person.profession}</p>
     
    // </div> : null}
    // </div>
    <div className="container">
       <div className='btn'>
      <button onClick={()=> setshow(!show)}> Show </button>
     </div>
     {show? <div className="card">
  <div className="image">
    <img href="#"src={person.img} />
  </div>
  <div className="content">
    <h3>FullName:{person.FULLNAME}</h3>
    <h5>Bio: {person.BIO}</h5>
    <p>Profession: {person.profession}</p>
 
  </div>
</div>  : null}  
</div>
    
  );
}

export default App;
