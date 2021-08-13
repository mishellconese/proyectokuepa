import React from "react";
import { Link } from 'react-router-dom'
import '../login/login.css';
import imalog from '../../utils/images/imagenlogin.PNG';

function Login (){
  return(
        <div className='porb'>
            <div className="part1">
              <div><h2><b>Iniciar sesión</b></h2></div>
              <div className="onebox">
                <div><h6>Nombre de usuario</h6></div>
                <input
                  type="email"
                  placeholder="Ingrese su nombre de usuario"
                />
              </div>
              <div className="onebox">
                <div><h6>Contraseña</h6></div>
                <input
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <Link to="/home">
                    <button className='inicio'>
                    INICIAR SESIÓN
                    </button>
                </Link>
            </div>
            <img className='imagenlog' src={imalog} alt="imalog" />

        </div>
  )
  }


export default Login