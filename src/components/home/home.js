import React from "react";
import './home.css';
import { Link } from 'react-router-dom'
import egresados from '../../utils/images/egresados.jpg';

function Home (){
    return(
            <div className='home'>
                <div className='conteneodr'>
                    <div className="bienvenido">
                    <div className='first'>
                    <Link to="/cerrar">
                        <button className='sesion'>
                        Cerrar sesión
                        </button>
                    </Link>
                    </div>
                    <h2 className='bienvenido'>Bienvenido</h2>
                    <h5>Para registrar estudiantes egresados de click en el botón <b>Registrar</b></h5>
                        <Link to="/registro">
                        <button className='Registro'>
                        Registrar
                        </button>
                        </Link>
                    </div>

                    <div className="ima">
                    <img className='egresados' src={egresados} alt="egresados" />
                    </div>
                </div>
            </div>
    )
}
export default Home