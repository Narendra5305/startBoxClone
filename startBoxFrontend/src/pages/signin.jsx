import React, { useState } from 'react';
import { useLoginUserMutation } from "../features/api/apiSlice";
import { useNavigate } from 'react-router';

import "./pageCss/signin.css"


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password }).unwrap();
      
      
      localStorage.setItem('user', JSON.stringify(response));
      
      
      navigate("/");
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        {isError && (
          <p className="error">
            Login failed: {error?.data?.message || 'Something went wrong'}
          </p>
        )}

        <p className="signup-link">
          Don’t have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
