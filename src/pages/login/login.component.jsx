import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './login.styles.scss';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: false
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className='login-page'>
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        );
    }
};

export default LoginPage;