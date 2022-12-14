import React , { useState } from 'react';
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"

export default function Login() {
    {
        const [password, setPassword] = useState("");
        const [userName, setuserName] = useState("");
        const [passwordError, setpasswordError] = useState("");
        const [userNameError, setuserNameError] = useState("");
      
        const handleValidation = (event) => {
          let formIsValid = true;
      
          if (!userName) {
            formIsValid = false;
            setuserNameError("User Not Found");
            return false;
          } else {
            setuserNameError("");
            formIsValid = true;
          }
      
          if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
              "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
          } else {
            setpasswordError("");
            formIsValid = true;
          }
      
          return formIsValid;
        };
      
        const loginSubmit = (e) => {
          e.preventDefault();
          handleValidation();
        };
      
        return (
          <div className="App">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                  <form id="loginform" onSubmit={loginSubmit}>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="EmailInput"
                        name="EmailInput"
                        aria-describedby="emailHelp"
                        placeholder="Enter UserName"
                        onChange={(event) => setuserName(event.target.value)}
                      />
                      <small id="emailHelp" className="text-danger form-text">
                        {userNameError}
                      </small>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <small id="passworderror" className="text-danger form-text">
                        {passwordError}
                      </small>
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }