import logo from "../../logos/logo.png"
import "./navbar.css"

import "../Home Page/Home.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import { HoverDiv1 } from "../Home Page/HoverDiv"

// import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const [state,setState] = useState(false);

    // const navigate=useNavigate()
    const display=()=>{
        setState(!state);
    }

    // const userstate = useSelector((state) => state.loginUserReducer);
    // const { currentUser } = userstate;

    
    const handleClick=()=>{
        window.location.href="/login"
    //  navigate("/login")
    }

    return (
        <>
            <div className="navbar" style={{marginBottom:"30px"}}>
                <img className="main-logo" src={logo} alt="policybazaar-logo" />
                <div className="first-option " onMouseOver={display}>
                    <p  >Insurance Products</p>


                    <svg width="12" height="8" className="arrow" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z" fill="#0663F6" />
                    </svg>
                </div>
                <div className="second-option">
                    <p >Renew Your Policy</p>
                    <svg width="12" height="8" className="arrow" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z" fill="#0663F6" />
                    </svg>
                </div>
                <div className="third-option">
                    <p>File a claim</p>
                </div>
                <div className="fourth-option">
                    <p >Support</p>
                    {/* <svg width="12" height="8" className="arrow" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z" fill="#0663F6" />
                    </svg> */}
                </div>
                <div className="signIn-option"  >

              <button onClick={handleClick}>Sign In</button>
                
                  
                    
                </div>
            </div>

           {state&&< HoverDiv1></HoverDiv1>}
        </>
    )

}