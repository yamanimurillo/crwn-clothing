import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';

import './login.styles.scss';

const LoginPage = () => {
    return (
        <div className='login-page'>
            <SignIn></SignIn>
        </div>
    );
};

export default LoginPage;