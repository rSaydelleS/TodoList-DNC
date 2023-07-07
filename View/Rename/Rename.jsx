import React from 'react';
import Header from '../../src/Componentes/Header/Header';
import Title from '../../src/Componentes/Title/Title';
import { Link } from 'react-router-dom';

import './index.scss'
const Rename = () => {

  return <>
    <div><Header /></div>
    <div><Title /></div>
    <div className='rename'>
            <div className='rename__section'>
                <h1>Deseja editar esse item?</h1>
                <p>Colocar descrições das tarefas aqui.</p>
                <span>
                    <Link to={`/`}><button>Não</button></Link>
                    <Link to={`/`}><button className='rename__white'>Sim</button></Link>
                </span>
            </div>
        </div>
  </>;
}

export default Rename