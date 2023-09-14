import React from "react";
import Button from '../components/Button'

const Home = () => {
    return (
        <div className='container'>
            <div className='content'>
                <h1 className='title'>Welcome to Auth System!</h1>
                <p className='description'>This is an incredible authentication system with production level features!</p>
                <hr className='breaker' />
                <p>Click the Log In button</p>
                <Button 
                    type='button' 
                    text='Se connecter' 
                    version='primary' 
                    onclick_path='/login' 
                />
            </div>
        </div>
    )
};

export default Home