import React ,{useState} from "react";

import "./componentCss/navbar.css"

import { useNavigate } from 'react-router';

function NavbarContOne(){
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate("/")} className="navbar-cont-1">
            <h2>StartBox</h2>
        </div>
    )
}


function NavbarContTwo(){
    
    const [activeDropdown, setActiveDropdown] = useState(null);
   

    const items = [
        { name: 'Products', content: ["Venture Funds" ,"Rolling Funds" , "Scout Funds" , "SPVs" ,"Roll Up Vehicles" ] },
        { name: 'Solution', content: ["Emaerging Managers","Established Venture" ,"Crypto"] },
        { name: 'Pricing', content: [""] },
        { name: 'Resources', content: ["Blogs","Help Centre" ,"Education Centre" ,"Data Centre" ,"Aout Us" ,"Careers"] }
      ];

    const handleHover = (item) => {
        setActiveDropdown(item.name);
    };
    
    const handleLeave = () => {
        setActiveDropdown(null);
    };
    
    return (
        <div className="navbar-cont-2" onMouseLeave={handleLeave}>
      {items.map((item) => (
        <div
          className="navbar-cont-2-child-1"
          key={item.name}
          onMouseEnter={() => handleHover(item)}
        >
          <button className="navbar-cont-2-buttons">{item.name}</button>

          {activeDropdown === item.name && (
            <div className="dropdown-box">
                <ul>
                    {item.content.map((cont)=>(
                        <li><p>{cont}</p></li>
                    ))}

                </ul>
              
            </div>
          )}
        </div>
      ))}
        </div>
    );
    
    
}


function NavbarContThree(){
    const navigate = useNavigate();
    return(
        <div className="navbar-cont-3">
            <button onClick={()=> navigate('/signin')}>Sign in</button>
            <button>Contact Sales</button>
        </div>
    )
}



const Navbar =() =>{
    return(
        <div id="navbar">
            <div className="navbar-cont">
                <NavbarContOne/>
                <NavbarContTwo/>
                <NavbarContThree/>
            </div>
        </div>
    )
}


export default Navbar ;