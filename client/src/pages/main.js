import { useParams, Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import NavComponent from "../components/nav";
import { CREATE_VOTE } from "../utils/mutations";
import { useState } from "react";

// NEEDS HELP - We need to be able to vote on the players and after the vote, the options need to be taken away - The vote needs to go the database as a vote and show up on the page




//This was pulled from the week 21 mini project
const Main = () => {
  let { id } = useParams()
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
    variables: { _id: id }
  });
  console.log(data);

  //This was pulled from week 21 mini project - will not be exactl what we use to insert the data
  const matchupList = data?.matchups || [];
  console.log (matchupList)


  //NEW STUFF
//   const [formState, setFormState] = useState({
//     player: '',
//     password: '',
// });
    
  const [createVote, { error }] = useMutation(CREATE_VOTE);

  const handleVote = async (id, playNum) => {
    console.log(playNum)
    console.log(id)

    // const { name, value } = event.target;
    //     setFormState({ ...formState, [name]: value });

    try {
      await createVote({
        variables: { _id: id, playNum: playNum },
      });
    } catch (err) {
      console.error(err);
    }
  };



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
        <h1 className="display-2">All Matchups</h1>
        {matchupList.length > 0 ? (
          matchupList.map((matchup) => {
            return (
              <div className="card bg-gray w-auto d-flex flex-row card-text-center m-2 text-center justify-content-center">
              
                <div className="d-flex flex-column m-2">
                  <img src={matchup.player1.imageUrl}></img>

                  <h2 className="">{matchup.player1.full_name}</h2>
                  <h2>Team: {matchup.player1.team}</h2>
                  <h2>Position: {matchup.player1.position}</h2>
                  <button className="btn btn-primary" onClick={() => handleVote(matchup._id, 1)}>
                    Vote
                  </button>
                  <h3>Number of Votes: {matchup.player1_votes}</h3>
                </div>

                <div className="d-flex align-items-center m-4">
                  <h1>VS</h1>
                </div>

                <div className="d-flex flex-column m-2">
                  <img src={matchup.player2.imageUrl}></img>
                  <h2>{matchup.player2.full_name}</h2>
                  <h2>Team: {matchup.player2.team}</h2>
                  <h2>Position: {matchup.player2.position}</h2>
                  <button className="btn btn-primary" onClick={() => handleVote(matchup._id, 2)}>
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
