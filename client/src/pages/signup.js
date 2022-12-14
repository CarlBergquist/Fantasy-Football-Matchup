import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        userName: '',
        password: '',
    });
    const [addProfile, { error }] = useMutation(ADD_PROFILE);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });

    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addProfile({
                variables: { ...formState },
            });

            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
        setFormState({
            userName: '',
            password: ''
          });
          window.location.assign('/main')
        
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-input">
                                    <label>Username</label>
                                    <input
                                        className="form-control"
                                        name="userName"
                                        type="text"
                                        placeholder="Enter Username"
                                        value={formState.userName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name='password'
                                        placeholder="Password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    SignUp
                                </button>
                            </form>
                    
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Signup;