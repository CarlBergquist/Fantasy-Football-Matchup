import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import NavComponent from "../components/nav";

//This was pulled from the week 21 mini project
const Main = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  //This was pulled from week 21 mini project - will not be exactl what we use to insert the data
  const matchupList = data?.matchups || [];

  return (
    <div className="container">
      <NavComponent />
      <h1>All Matchups</h1>
      {matchupList.map((matchup) => {
        return (
          <div className="card bg-gray w-75 d-flex flex-row">
            <h6>Matchup created by {}</h6>
            <div className="">
              <image>{matchup.player1.image}</image>
              <h3>{matchup.player1.name}</h3>
              <button className="text-dark bg-green" input="">
                Vote
              </button>
              <h3>{Math}%</h3>
            </div>

            <div className="text-center">
              <h2>VS</h2>
            </div>

            <div className="">
              <image>{matchup.player2.image}</image>
              <h3>{matchup.player2.name}</h3>
              <button className="text-dark bg-green" input="">
                Vote
              </button>
              <h3>{Math}%</h3>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Main;
