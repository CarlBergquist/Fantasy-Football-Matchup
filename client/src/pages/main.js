import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import NavComponent from "../components/nav";

import Auth from '../utils/auth';

//const imageUrl1 = `https://sleepercdn.com/content/nfl/players/thumb/${matchup.player1.image}.jpg`
//const imageUrl2 = `https://sleepercdn.com/content/nfl/players/thumb/${matchup.player2.image}.jpg`

//This was pulled from the week 21 mini project
const Main = () => {
    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    })


    //This was pulled from week 21 mini project - will not be exactl what we use to insert the data
    const matchupList = data?.matchups || [];


    //Need to pull data from player model, looking at what was made in the matchup model
    if (!Auth.loggedIn()) {
        console.log(Auth.loggedIn)
        return window.location.assign('/');

    } else {
        return (

            <div className="container">
                <NavComponent />
                <h1>All Matchups</h1>
                {matchupList.length > 0 ? matchupList.map((matchup) => {
                    return (
                        <div className="card bg-gray w-75 d-flex flex-row">
                            <h6>Matchup created by {matchup.createdBy}</h6>
                            <div className="">
                                <img src></img>

                                <h3>{matchup.player1}</h3>
                                <button className="text-dark bg-green" input="">Vote</button>
                                <h3>{Math}%</h3>

                            </div>

                            <div className="text-center">
                                <h2>VS</h2>
                            </div>

                            <div className="">
                                <img src></img>
                                <h3>{matchup.player2}</h3>
                                <button className="text-dark bg-green" input="">Vote</button>
                                <h3>{Math}%</h3>

                            </div>

                        </div>
                    )
                }) : <h1>No Matchups Found</h1>
                }

            </div>
        )
    }
}

export default Main;
