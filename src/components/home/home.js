import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'

function Home (){
    return(
            <div className='home'>
                <h1>HOME</h1>
                <Link to="/registro">
                    <button className='Registro'>
                    volver
                    </button>
                </Link>
            </div>
    )
    }


export default Home