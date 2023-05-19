import React from "react";
import {Link} from "react-router-dom";
import startphoto from "./../img/startphoto.jpg"
import "./Start.css"
import { AiOutlineArrowRight } from "react-icons/ai";



function Start(){
    return (
        <body >
            <img src={startphoto} alt="startphoto" className="startphoto"></img>
            <p className="title">Hi, friend! get <br></br> Collect your NFTs</p>
            <p className="text">Discover your various NFT collections from <br></br> global content creators.</p>
            <button className="startbtn">
                Lets Start
                <AiOutlineArrowRight/> 
            </button>

        </body>        
    );
}

export default Start;