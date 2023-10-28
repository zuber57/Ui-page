// Registration.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const  handleSubmit = async (e) => {
    e.preventDefault();
    // Implement user registration logic here
    const data = {
        name: formData.name,
        email: formData.username,
        password: formData.password,
      };
      try{
      const apiUrl = 'http://localhost:4000/api/v1/register';
      const response = await axios.post(apiUrl,data)
      if(response.data.success){ window.location.href = "/"}
      else{alert("register Failed")}
     }
     catch(e){
        alert("Register error")
        console.log(e);
     }
    };
    console.log(formData);

  
  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h6">Register User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Box>
  );
};


export default Registration;
