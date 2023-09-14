import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify }) => {
    const routeParam = useParams()
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate()

    const verify_account = e => {
        const uid = routeParam.uid;
        const token = routeParam.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        navigate("/");
    }

    return (
        <div className='container'>
            <div className="content">
                <h1>Vérifiez votre compte</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='button button-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    );  
};

export default connect(null, { verify })(Activate);