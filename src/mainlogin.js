import React from 'react'
import './mainlogin.css'
import { useNavigate } from 'react-router-dom';

const data=[
    {
        name:"Representative Login",
        image:"/student.svg",
    },
    {
        name:"Student Login",
        image:"/ir.svg",
    },
    {
        name:"T&P Office Login",
        image:"/tpo.svg",
    },
];

function Comp(props){
    const navigate = useNavigate();

  return(
     <div onClick={() => navigate('/login')} className='box-container'>
         <button className='b'>
           <img src={props.image} alt="" />
           <h2>{props.name}</h2>
         </button>
     </div>
  )
}
function Mainlogin() {
  return (
    <div className='box'>
           <div className='compo'>
              <Comp
                 name ="Representative Login"
                 image="./student.svg"
              />
           </div>

            <div className='compo'>
               <Comp
                  name ="Student Login"
                  image="./ir.svg"
              />
            </div>
            
           <div className='compo'>
              <Comp
               name ="T&P Office Login"
               image="./tpo.svg"
              />
           </div>
    </div>
  )
}



export default Mainlogin;