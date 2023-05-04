import "./Home.css";
import grocerypic from "../../../Assests/pictures/grocery.jpeg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Home(): JSX.Element {
    
    return (
        <div className="Home">
            
            <br></br>  <br></br>  <br></br>  <br></br>
			<h1>GOURMET GLATT!!</h1>
            <h2>WE BUY FOR YOU!!!!</h2>
            <NavLink to="/menu">Shop now!</NavLink>
         
           
             
        </div>
    );
}

export default Home;
