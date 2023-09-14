import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

import Button from '../components/Button'

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '', 
    });

    const navigate = useNavigate()

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        navigate("/");
    }

    return (
        <div className='container'>
            <div className="content">
                <h1>Demande de mise à jour du mot de passe</h1>
                <p>Saisissez l'adresse email de votre compte</p>
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
                    <Button type='submit' text='Envoyer la demande' version='primary' />
                </form>
            </div>
        </div>
    );  
};

export default connect(null, { reset_password })(ResetPassword);