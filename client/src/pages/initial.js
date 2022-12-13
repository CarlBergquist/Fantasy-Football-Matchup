import React from "react";
import Nav from "../components/nav";
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"

export default function Init() {
  return (
    <div className="">
      <Nav />
      <h1>Fantasy Football Matchup Analyzer</h1>
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  );
}
