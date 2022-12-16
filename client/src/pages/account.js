import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import NavComponent from "../components/nav";
import Auth from '../utils/auth';
//This was pulled from the week 21 mini project
const Account = () => {

    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    })

    //FOR NOW, to RENDER PAGE
    

    //This was pulled from week 21 mini project - will not be exactl what we use to insert the data

    //FOR NOW, to RENDER PAGE
    const myMatchupList = data?.matchups || [];


    //I think we can use a similar method as the main.js to make a bunch of cards with matchups, but we just want this user's matchups

    //THIS IS IMPORTANT FOR LATER

    // const myMatchupList = matchupList.filter( createdBy.username == this.User)

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
                        <div className="card bg-gray w-75 d-flex flex-row m-2">
                            <div className="d-flex flex-column m-2">
                                <img src={matchup.player1.imageUrl}></img>
                                <h3>{matchup.player1.full_name}</h3>
                                <h2>Team: {matchup.player1.team}</h2>
                                <h2>Position: {matchup.player1.position}</h2>
                                <h3>Number of Votes: {matchup.player1_votes}</h3>

                            </div>

                            <div className="text-center m-2">
                                <h2>VS</h2>
                            </div>

                            <div className="d-flex flex-column m-2">
                                <img src={matchup.player2.imageUrl}></img>
                                <h3>{matchup.player2.full_name}</h3>
                                <h2>Team: {matchup.player2.team}</h2>
                                <h2>Position: {matchup.player2.position}</h2>
                                <h3>Number of Votes: {matchup.player2_votes}</h3>

                            </div>

                            <button type="button" className="btn btn-danger m-2">Delete</button>

                        </div>
                    )
                }) : <h1>No Matchups Found</h1>
                }

            </div>
        )
    }
}

export default Account;
