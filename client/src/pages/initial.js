import React from "react";
import Footer from "../components/footer";
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"

export default function Init() {

    return (
        <div className="m-2">
            <h1 className="display-1 d-flex justify-content-center">Fantasy Football Matchup Analyzer</h1>
            <div className="d-flex justify-content-center">
            <a href='./login'className="m-2" ><button className="btn btn-primary">Login</button></a>
            <a href='./signup'className="m-2"><button className="btn btn-primary">Sign Up</button></a>
            </div>
            <img src="https://static.www.nfl.com/image/private/t_q-best/league/pyzxubxdovaubclvbvf0" className="img-fluid max-width: 40% height: auto"></img>
            <Footer />
        </div>
    );

}
