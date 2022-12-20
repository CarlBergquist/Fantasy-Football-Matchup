import React, { useState } from 'react';
import NavComponent from '../components/nav';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MATCHUP } from '../utils/mutations';
import { QUERY_MATCHUPS, QUERY_PLAYER } from "../utils/queries";
import { useNavigate } from 'react-router-dom'

//NEED HELP: When we type in player names and enter, it collects the data in the console.log, but we need that data to be matched up with the corresponding players that are in our players database, and then we need to transfer that into our matchups database so it can be displayed on the main page - we also need the createdBy to be linked to this user that just created the matchup - see account.js for another question
export default function Matchup() {
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        player1: '',
        player2: '',
    });
    const queryplayer1 = useQuery(QUERY_PLAYER, {
        variables: {fullName: formState.player1},
      });
      const queryplayer2 = useQuery(QUERY_PLAYER, {
        variables: {fullName: formState.player2},
      });
    const [createMatchup, { error }] = useMutation(CREATE_MATCHUP, {
        refetchQueries: QUERY_MATCHUPS
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState.player1);
       
         formState.player1 =  queryplayer1.data.player._id
         formState.player2 =  queryplayer2.data.player._id

         
        try {
            const { data } = await createMatchup({
                variables: { ...formState },
                refetchQueries: QUERY_MATCHUPS
            });
            console.log(data)
            
            //Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
        setFormState({
            player1: '',
            player2: '',
        });

    };
    if (!Auth.loggedIn()) {
        console.log(Auth.loggedIn)
        return navigate('/');

    } else {
        return (
            <div className="container">
                <NavComponent />
                <div className="card w-200 d-flex align-items-center">

                    <div className="text-center m-4 border border-secondary bg-secondary text-light">
                        <h1 className="m-1 display-2">CREATE YOUR MATCHUP</h1>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="text-center m-4">
                            <h1>Enter Player 1 </h1>
                            <input
                            className="input-group input-group-lg"
                                name="player1"
                                type="text"
                                placeholder='Enter player 1 name'
                                value={formState.player1}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="text-center m-4">
                            <h1 className=''>VS </h1>
                        </div>


                        <div className=" text-center m-4">
                            <h1>Enter Player 2</h1>
                            <input
                            className="input-group input-group-lg"
                                name="player2"
                                type="text"
                                placeholder='Enter player 2 name'
                                value={formState.player2}
                                onChange={handleChange} 
                                />
                        </div>

                        <div className="text-center m-4">
                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                    </form>

                    <div>


                    </div>


                </div>
            </div>
        );
    }
}