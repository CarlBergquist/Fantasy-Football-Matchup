import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import NavComponent from "../components/nav";
import Auth from '../utils/auth';
//This was pulled from the week 21 mini project
import { REMOVE_MATCHUP} from '../utils/mutations'

//NEEDS HELP - Need to be able to filter out all of the matchups for this users matchups based on createdBy - and display on the page - also be able to delete each matchup presented there - delete from the database so it doesn't show up on the main page our account page

const Account = () => {

    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    })
    //FOR NOW, to RENDER PAGE
    const [removeMatchup, { error }] = useMutation(REMOVE_MATCHUP);

    //This was pulled from week 21 mini project - will not be exactl what we use to insert the data

    //FOR NOW, to RENDER PAGE
    const myMatchupList = data?.matchups || [];

    const handleDeleteMatchup = async (_id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
          return false;
        }
        try {
          const response = await removeMatchup({
            variables: { _id: _id },
          });
    
          if (!response) {
            throw new Error("something went wrong!");
          }
          removeMatchup(_id);
          window.location.reload()
        } catch (err) {
          console.error(error);
        }
      };
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
                <h1 className="display-2">My Matchups</h1>
                {myMatchupList.length > 0 ? myMatchupList.map((matchup) => {
                    return (
                        <div className="card bg-gray w-auto d-flex flex-row card-text-center m-2 text-center justify-content-center">
                            <div className="d-flex flex-column m-2">
                                <img src={matchup.player1.imageUrl}></img>
                                <h2>{matchup.player1.full_name}</h2>
                                <h2>Team: {matchup.player1.team}</h2>
                                <h2>Position: {matchup.player1.position}</h2>
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
                                <h3>Number of Votes: {matchup.player2_votes}</h3>

                            </div>

                            <button type="button" className="btn btn-danger m-2" onClick={() => handleDeleteMatchup(matchup._id)} >Delete</button>

                        </div>
                    )
                }) : <h1>No Matchups Found</h1>
                }

            </div>
        )
    }
}

export default Account;
