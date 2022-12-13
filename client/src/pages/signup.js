import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import { useMutation } from '@apollo/client';
//import { ADD_PROFILE } from '../utils/mutations';

//import Auth from '../utils/auth';

export default function Signup ()  {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
  });
  //const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { userName, value } = event.target;

    setFormState({
      ...formState,
      [userName]: value,
    });
  };

  // submit form
const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);}

    /* try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  }; 
 */
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">

              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.userName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Sign Up!
                </button>
              </form>
            

          </div>
        </div>
      </div>
    </main>
  );

}