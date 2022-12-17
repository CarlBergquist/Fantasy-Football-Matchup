import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import NavComponent from "../components/nav";

// NEEDS HELP - We need to be able to vote on the players and after the vote, the options need to be taken away - The vote needs to go the database as a vote and show up on the page

//This was pulled from the week 21 mini project
const Main = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });
  console.log(data);
  //This was pulled from week 21 mini project - will not be exactl what we use to insert the data
  const matchupList = data?.matchups || [];
  console.log (matchupList)

  //Need to pull data from player model, looking at what was made in the matchup model

  //Need to add team and position - imageUrl is also a virtual that will be included
  //   console.log(matchupList);
  if (!Auth.loggedIn()) {
    console.log(Auth.loggedIn);
    return window.location.assign("/");
  } else {
    return (
      <div className="container">
        <NavComponent />
        <h1>All Matchups</h1>
        {matchupList.length > 0 ? (
          matchupList.map((matchup) => {
            return (
              <div className="card bg-gray w-75 d-flex flex-row">
                <h6>Matchup created by {matchup.createdBy.username}</h6>
                <div className="d-flex flex-column">
                  <img src={matchup.player1.imageUrl}></img>

                  <h3>{matchup.player1.full_name}</h3>
                  <h2>Team: {matchup.player1.team}</h2>
                  <h2>Position: {matchup.player1.position}</h2>
                  <button className="text-dark bg-green" input="">
                    Vote
                  </button>
                  <h3>Number of Votes: {matchup.player1_votes}</h3>
                </div>

                <div className="text-center">
                  <h2>VS</h2>
                </div>

                <div className="d-flex flex-column">
                  <img src={matchup.player2.imageUrl}></img>
                  <h3>{matchup.player2.full_name}</h3>
                  <h2>Team: {matchup.player2.team}</h2>
                  <h2>Position: {matchup.player2.position}</h2>
                  <button className="text-dark bg-green" input="">
                    Vote
                  </button>
                  <h3>Number of Votes: {matchup.player2_votes}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Matchups Found</h1>
        )}
      </div>
    );
  }
};

export default Main;
