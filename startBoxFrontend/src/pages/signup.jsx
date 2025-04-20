import React, { useState } from 'react';
import { useCreateUserMutation } from "../features/api/apiSlice";
import "./pageCss/signup.css"

import { useNavigate } from 'react-router';


function RegisterForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      role: 'jobseeker',
      bio: '',
      skills: '',
      interests: '',
    });
  
    const [profilePic, setProfilePic] = useState(null);
    const [createUser, { isLoading, isSuccess, error }] = useCreateUserMutation();

    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleImageChange = (e) => {
      setProfilePic(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const payload = new FormData();
  
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('password', formData.password);
      payload.append('role', formData.role);
      payload.append('bio', formData.bio);
  
      // Split skills and interests into arrays
      const skillsArray = formData.skills.split(',').map((s) => s.trim());
      const interestsArray = formData.interests.split(',').map((i) => i.trim());
  
      skillsArray.forEach(skill => payload.append('skills[]', skill));
      interestsArray.forEach(interest => payload.append('interests[]', interest));
  
      if (profilePic) {
        payload.append('image', profilePic); // backend expects "image"
      }
  
      await createUser(payload);
    };
  
    return (
      <div className="registrations">
        <form  className="registrations-form" onSubmit={handleSubmit} style={{ maxWidth: 500, margin: 'auto' }}>
            <h2>Register User</h2>
      
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
      
            <label>Role:</label><br />
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="jobseeker">Jobseeker</option>
              <option value="founder">Founder</option>
              <option value="investor">Investor</option>
            </select><br />
      
            <textarea name="bio" placeholder="Bio" onChange={handleChange}></textarea><br />
            <input type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} /><br />
            <input type="text" name="interests" placeholder="Interests (comma-separated)" onChange={handleChange} /><br />
            <input type="file" name="profilePic" accept="image/*" onChange={handleImageChange} /><br /><br />
      
            <button type="submit" disabled={isLoading}>Create User</button>
      
            {isSuccess && <p style={{ color: 'green' }}>User created successfully!</p>}
            {error && <p style={{ color: 'red' }}>Something went wrong.</p>}
        </form>

        <p className="signup-link">
          If you have already an account?{' '}
          <span onClick={() => navigate('/signin')}>Sign in</span>
        </p>
      </div>
    );
  }
  
  export default RegisterForm;