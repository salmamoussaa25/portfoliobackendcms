import React from 'react';
import './LogIn.css';
import loginlogo from '../assets/loginlogo.png';
import Title from '../components/Title'

const LogIn = () => {
    return ( 
    
        <div className='loginpagecont'>
            <Title pageTitle="Admin Log In" />
            <section className='logincontent'>
                <img src={loginlogo} alt="Logo, sal's studio by Salma Moussa" />
                <section className='loginsection_cont'>
                    <h1 className='welcometext'>Welcome Back!</h1>
                </section>
            </section>
        </div> 
        );
}
 
export default LogIn;