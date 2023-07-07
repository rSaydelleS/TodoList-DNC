import React from 'react'
import Header from '../../src/Componentes/Header/Header';
import Title from '../../src/Componentes/Title/Title';
import './index.scss';
const Delete = () => {

    return <>
        <div >
            <div><Header /></div>
            <div><Title /></div>
            <div className='card'>
                <div className='card__content'>
                    <h1>Deseja excluir esse item?</h1>
                    <p>Colocar descrições das tarefas aqui.</p>
                    <span>
                        <button>Não</button>
                        <button className='card__btn__white'>Sim</button>
                    </span>
                </div>
            </div>
        </div>
    </>;
}

export default Delete;