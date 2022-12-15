import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import NavComponent from "../components/nav";
import Auth from '../utils/auth';
//This was pulled from the week 21 mini project
const Account = () => {

    // const { loading, data } = useQuery(QUERY_MATCHUPS, {
    //     fetchPolicy: "no-cache"
    // })

    //FOR NOW, to RENDER PAGE
    let data;

    //This was pulled from week 21 mini project - will not be exactl what we use to insert the data

    //FOR NOW, to RENDER PAGE
    const myMatchupList = data?.matchups || [];


    //I think we can use a similar method as the main.js to make a bunch of cards with matchups, but we just want this user's matchups

    //THIS IS IMPORTANT FOR LATER

    // const myMatchupList = matchupList.fitler(this.user)
    if (!Auth.loggedIn()) {
        console.log(Auth.loggedIn)
        return window.location.assign('/');

    } else {
        return (
            <div className="container">
                <NavComponent />
                <h1>My Matchups</h1>
                {myMatchupList.length > 0 ? myMatchupList.map((matchup) => {
                    return (
                        <div className="card bg-gray w-75 d-flex flex-row">
                            <div className="">
                                <image>{matchup.player1.image}</image>
                                <h3>{matchup.player1}</h3>
                                <button className="text-dark bg-green" input="">Vote</button>
                                <h3>{Math}%</h3>

                            </div>

                            <div className="text-center">
                                <h2>VS</h2>
                            </div>

                            <div className="">
                                <image>{matchup.player2.image}</image>
                                <h3>{matchup.player2}</h3>
                                <button className="text-dark bg-green" input="">Vote</button>
                                <h3>{Math}%</h3>

                            </div>

                            <button className="text-dark bg-red">Delete</button>

                        </div>
                    )
                }) : <h1>No Matchups Found</h1>
                }

            </div>
        )
    }
}

export default Account;
