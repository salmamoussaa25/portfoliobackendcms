import React from 'react';
import './LogIn.css';
import loginlogo from '../assets/loginlogo.png';
import Title from '../components/Title';
import FieldSection from "../components/FieldSection";

const LogIn = () => {
    return ( 
    
        <div className='loginpagecont'>
            <Title pageTitle="Admin Log In" />
            <section className='logincontent'>
                <img src={loginlogo} alt="Logo, sal's studio by Salma Moussa" />
                <section className='loginsection_cont'>
                    <section className='signincont'>
                        <section className='loginheadingsection'>
                            <h1 className='welcomeheading'>Welcome Back!</h1>
                            <p className='welcometext'>Please log in with the email provided by your supervisors</p>
                        </section>
                        
                        <FieldSection
                            label="Email"
                            placeholder="Enter your email address"
                            type="email"
                        />

                        <FieldSection
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            rightLabel="Forgot Password?"
                        />

                        <div className="remember_me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>

                        <p className='byclicking_text'>*By clicking Sign In,  you are agreeing to the Terms of Services and Privacy Policy</p>  

                    </section>
                </section>
            </section>
        </div> 
        );
}
 
export default LogIn;