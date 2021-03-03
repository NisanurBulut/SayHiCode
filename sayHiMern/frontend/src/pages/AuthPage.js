import React, { Component } from 'react'
import './AuthPage.css';

export class AuthPage extends Component {
    render() {
        return (
           <form>
               <div className="form-control">
                   <label htmlFor="email">Email</label>
                   <input type="email" id="email" />
               </div>
               <div className="form-control">
                   <label htmlFor="email">Password</label>
                   <input type="password" id="password" />
               </div>
               <div className="form-actions">
                   <button type="button">Sign Up</button>
                   <button type="button">Sign In</button>
               </div>
           </form>
        )
    }
}

export default AuthPage;
