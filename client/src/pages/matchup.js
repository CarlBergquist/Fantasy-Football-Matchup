import React from 'react';
import NavComponent from '../components/nav';
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"

export default function Matchup() {
    return ( 
    <div className="container">
        <NavComponent />
            <div className="card w-200 d-flex align-items-center">
                
                <div className="text-center m-4 bg-primary">
                <h1 className="m-1">CREATE YOUR MATCHUP</h1>
                </div>

                <div className="text-center m-4">
                <h1>Enter Player 1 </h1>
                <input></input>
                </div>


                <div className="text-center m-4">
                <h1>VS </h1>
                </div>


                <div className=" text-center m-4">
                <h1>Enter Player 2</h1> 
                <input></input>
                </div>

                <div className="text-center m-4">
                <button className="btn btn-success">SUBMIT</button>
                </div>

               
                <div>
               
                    
                </div>


            </div>
    </div>
    );
}