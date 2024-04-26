import React, { Component } from 'react';
import NavigationBar from '../../../googlemap/src/NavigationBar'; // Import the NavigationBar component
import carpoolImage from './carpool_signup.webp'; // Import the image file
import './signUP.css';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword, email } = this.state;

        if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (email.indexOf("@") === -1) {
            alert("Invalid email address.");
            return;
        }

        // Redirect to home page or perform other actions upon successful validation
        // Example: this.props.history.push('/home');
    };

    render() {
        const { firstName, lastName, email, password, confirmPassword } = this.state;

        return (
            <div>
                <NavigationBar /> {/* Include the NavigationBar component */}
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-section">
                            <h2 style={{ fontSize: '30px' }}>Create Account</h2>
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" id="fname" name="firstName" value={firstName} onChange={this.handleChange} required />

                            <label htmlFor="lname">Last Name:</label>
                            <input type="text" id="lname" name="lastName" value={lastName} onChange={this.handleChange} required />

                            <label htmlFor="gmail-id">Gmail ID:</label>
                            <input type="email" id="gmail-id" name="email" value={email} onChange={this.handleChange} required />

                            <label htmlFor="new-password">Password:</label>
                            <input type="password" id="new-password" name="password" value={password} onChange={this.handleChange} required />

                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <input type="password" id="confirm-password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required />
                            <button className="button" type="submit">Sign Up</button>
                        </div>
                        <div className="form-section">
                            <img className="image" src={carpoolImage} alt="Image" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
