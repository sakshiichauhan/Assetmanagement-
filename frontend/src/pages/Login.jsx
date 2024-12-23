import React from 'react'

const Login = () => {
  return (
    <div>
    <h2>Asset management system</h2>
    <form>
    <h2> login</h2>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='**********'/>
        </div>
    </form>
    </div>
  )
}

export default Login