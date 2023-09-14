import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

import Button from '../components/Button'

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    });

    const navigate = useNavigate()

    const { username, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(username, email, password, re_password);
            setAccountCreated(true);
        }
    };

    if (isAuthenticated) {
        navigate("/");
    }

    if (accountCreated) {
        navigate("/login");
    }

    return (
        <div className='container'>
            <div className="content">
                <h1>Inscription</h1>
                <p>Créez votre compte</p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='Confirm Password'
                            name='re_password'
                            value={re_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                    </div>
                    <Button type='submit' text="S'inscrire" version='primary' />
                </form>
                <p className='indice'>
                    Déja inscrit? <Link to='/login'>Se connecter</Link>
                </p>
            </div>
        </div>
    );  
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { signup })(Signup);