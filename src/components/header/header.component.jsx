import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>

            <Link className='logo' to='/'>
                <Logo className='logo'></Logo>
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                <div className='option' onClick={() => auth.signOut()}>{currentUser.displayName} (LOGOUT)</div> :
                        <Link className='option' to='/login'>
                            LOGIN
                        </Link>
                }

            </div>

        </div>
    );
};

export default Header;