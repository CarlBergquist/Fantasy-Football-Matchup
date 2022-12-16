import React, { useState } from 'react';
import NavComponent from '../components/nav';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_MATCHUP } from '../utils/mutations';

export default function Matchup() {

    const [formState, setFormState] = useState({
        player1: '',
        player2: '',
    });

    const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await createMatchup({
                variables: { ...formState },
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
        return window.location.assign('/');

    } else {
        return (
            <div className="container">
                <NavComponent />
                <div className="card w-200 d-flex align-items-center">

                    <div className="text-center m-4 bg-primary">
                        <h1 className="m-1">CREATE YOUR MATCHUP</h1>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="text-center m-4">
                            <h1>Enter Player 1 </h1>
                            <input
                                name="player1"
                                type="text"
                                placeholder='Enter player 1 name'
                                value={formState.player1}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="text-center m-4">
                            <h1>VS </h1>
                        </div>


                        <div className=" text-center m-4">
                            <h1>Enter Player 2</h1>
                            <input
                                name="player2"
                                type="text"
                                placeholder='Enter player 1 name'
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