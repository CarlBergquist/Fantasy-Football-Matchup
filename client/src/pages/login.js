import React , { useState } from 'react';
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"
import Auth from '../utils/auth';
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


export default function Login() {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [validated] = useState(false);
    //const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    
    const [loginUser, { error }] = useMutation(LOGIN_USER);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await loginUser({
          variables: { ...userFormData },
        });
  
        Auth.login(data.login.token);
        navigate('/main')
      } catch (e) {
        console.error(e);
      }
  
      setUserFormData({
        username: '',
        password: ''
      });
    };
      
        return (
            <>
          <div className="App">
            <div className="container">
              <div className="row d-flex justify-content-center">
              <div className="bg-secondary text-light">
                <h1 className="display-1">LOG IN</h1>
                </div>
                <div className="col-md-4 m-2">
                  <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Form.Group>
                      <Form.Label>Username:</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                      />

                    </Form.Group>
                    <div className="form-group">
                      <label>Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={userFormData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary m-2" >
                      Login
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          </>
        );
      }
    