// Login.js
import React, { useState } from 'react';
import { Button, TextField, Grid, Paper } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    // Implement login logic here
    const data = {
      email: username,
      password: password,
    };
    try{
    const apiUrl = 'http://localhost:4000/api/v1/login';
    const response = await axios.post(apiUrl,data)
    if(response.data.success){ window.location.href = "/tabs"}
    else{alert("Login Failed")}
    }
    catch(e){
    alert("Login Error");
    console.log(e);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
              Login
            </Button>
            <a href="/register">Sign up?</a>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
