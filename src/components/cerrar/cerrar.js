import React from 'react';
import './cerrar.css';
import { Link } from 'react-router-dom'
import warn from '../../utils/images/warn.png'

function Cerrar (){
    return (
        <div className="cerrar">
            <img className='warn' src={warn} alt="warn" />
            <div className='text'><b>Atención!</b><br />Al concluir la sesion esta cerrara. ¿Está usted de acuerdo?<br />Podra reiniciar sesión en cualquier momento luego de concluir</div>
            <Link to="/">
                <button className='sesion'>
                    Aceptar
                </button>
            </Link>
            <Link to="/home">
                <button className='sesion'>
                Cancelar
                </button>
            </Link>
        </div>
    )
}

export default Cerrar