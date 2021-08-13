import React from 'react';
import {Link} from 'react-router-dom'
import '../header/header.css'
import logokuepa from '../../utils/images/logokuepa.PNG';

function Header (){
    return(
        <header>
            <div className='head'>
                <img className='imagenkuepa' src={logokuepa} alt="logokuepa" />
                <Link to="/home">
                    <button className='volver'>
                    volver
                    </button>
                </Link>
            </div>
        </header>
    )
    }


export default Header