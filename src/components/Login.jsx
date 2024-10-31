import React from 'react'
import './Login.css';
function Login() {
  return (
    <div className='login-container'>
        
        <div className="login-card">
            <form action="">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" />
                    </div>
                    <div className="submit">
                        <button>Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
