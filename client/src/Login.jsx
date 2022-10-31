
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './utils/mutations';
import { Link } from 'react-router-dom';
import Auth from './utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // clear form values
    setFormState({
      email: '',
      password: '',
    });

    try {
      const { data } = await login({
        variables: { ...formState }
      });
  
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login/<Link to="/signup">Signup</Link></h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
               Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;











// import React, { Component } from "react";

// //need to update with validation, SQL tie-ins

// export default class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {email:"", password:"", message:""};
//     }

//     render() {
//         return (
//             <div className="col-lg-9">
//                 <h4 className="m-1 p-2 border-bottom">Login</h4>

//                 {/* Email Starts */}
//                 <div className="form-group form-row">
//                     <label className="col-lg-4">Email:</label>
//                     <input 
//                     type="text"
//                     className="form-control" 
//                     value={this.state.email} 
//                     onChange={(event) => {this.setState({email: event.target.value})}}
//                     />
//                 </div>
//                 {/* Email Ends */}

//                 {/* Password Starts */}
//                 <div className="form-group form-row">
//                     <label className="col-lg-4">Password:</label>
//                     <input type="text" className="form-control" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}} />
//                 </div>
//                 {/* Password Ends */}

//                 <div className="text-right">
//                     {this.state.message}
//                     <button className="btn btn-primary m-1" onCLick={this.onLoginClick}>
//                     Login
//                     </button>

                    
//                 </div>
//             </div>
//         );
//     }//end of render

//     //executes when the user clicks on login
//     //using temporary hardcoding dummy login - need to fix!
//     onLoginClick = () => {
//         console.log(this.state);
//         if(
//             this.state.email === "admin@test.com" && 
//             this.state.password === "admin123"
//         ){
//             //success
//             this.setState({
//             message:<span className="text-success">Successfully Logged-In</span>});
//         }else
//         {
//             //error
//             this.setState({
//                 message:<span className="text-danger">Invalid Login, Please Try Again</span>});
//         }
//     }
// } 