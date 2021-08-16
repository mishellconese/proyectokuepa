import React from 'react';
import '../header/header.css'
import logokuepa from '../../utils/images/logokuepa.PNG';

function Header (){
    return(
        <header>
            <div className='head'>
                <img className='imagenkuepa' src={logokuepa} alt="logokuepa" />
            </div>
        </header>
    )
    }


export default Header