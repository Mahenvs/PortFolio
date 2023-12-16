import React, { useState } from 'react'
import './HeaderOption.css';
import { Outlet, Link } from "react-router-dom";

function HeaderOption({title,ind,onClick,activeClass}) {
  
  // const [ isActive,setIsActive ] = useState([false,falsefalse]);

  // const hadlerActive = () =>{

  //   if(title == "Projects"){
  //     const newState = [...isActive];
  //     console.log(isActive);

  //     newState[ind].active = !isActive[ind].active;
  //     setIsActive(newState);
      
  //     // setIsActive[0] = false;
  //     // setIsActive[2] = false;
  //     // setIsActive(false,true,false);
  //     // setIsActive[1](!isActive);
  //     // setIsActive[2](false);
  //     console.log(isActive);
  //   }
  //   else if(title == "Resume"){
  //     console.log(isActive[ind]);
  //     const newState = [...isActive];
  //     console.log(newState,"iii",isActive[ind]);
  //     newState[ind].active = !isActive[ind].active;
  //     console.log(newState);
  //     setIsActive(newState);
      
  //     // console.log(isActive);
  //     // setIsActive[0] = true;
  //     // setIsActive[1] = false;
  //     // setIsActive[2] = false;
  //   }
  //   else{
  //     // setIsActive(false,false,true);
  //   }
    
  // }
  return (
    <div className="headerOption"> 
        <Link to={`${title}`}  className={activeClass} onClick={onClick}>{title}</Link>
        {title != 'Contact' ? <span className="vertical_line"></span> : ""}
    </div>
  )
}

export default HeaderOption

