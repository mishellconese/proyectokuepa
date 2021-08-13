import React from 'react';
import './footer.css';
import logoOscuro from '../../utils/images/logoOscuro.JPG';

function Footer (){
    return(
        <footer>
            <div className='pie'>
            <img className='logoOscuro' src={logoOscuro} alt="logoOscuro"/>
            <h6 className='copy'>Copyright© Kuepa 2021</h6>
            </div>
        </footer>
    )
    }


export default Footer