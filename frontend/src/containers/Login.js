import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

import Button, { button } from '../components/Button'

const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    return (
        <div className='container'>
            <div className="content">
                <h1>Connexion</h1>
                <p>Connectez-vous à votre compte</p>
                <form onSubmit={e => onSubmit(e)}>
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
                    <Button type='submit' text='Se connecter' version='primary' />
                </form>
                <p className='indice'>
                    Vous n'avez pas encore de compte? <Link to='/signup'>S'inscrire</Link>
                </p>
                <p className='indice'>
                    Mot de passe perdu? <Link to='/reset-password'>Réinitialision du mot de passe</Link>
                </p>
            </div>
        </div>
    );

    
};

export default connect(null, { login })(Login);