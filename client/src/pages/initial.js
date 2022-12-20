import React from "react";
import Footer from "../components/footer";
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"
import { Link } from 'react-router-dom'

export default function Init() {

    return (
        <div className="m-2">
            <h1 className="display-1 d-flex justify-content-center">Fantasy Football Matchup Analyzer</h1>
            <div className="d-flex justify-content-center">
            <Link to='/login'className="m-2" ><button className="btn btn-primary">Login</button></ Link>
            <Link to='/signup'className="m-2"><button className="btn btn-primary">Sign Up</button></Link>
            </div>
            <img src="https://static.www.nfl.com/image/private/t_q-best/league/pyzxubxdovaubclvbvf0" alt="NFL Logo" className="img-fluid max-width: 40% height: auto"></img>
            <Footer />
        </div>
    );

}
