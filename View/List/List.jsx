import React from 'react'
import Header from '../../src/Componentes/Header/Header';
import Title from '../../src/Componentes/Title/Title';
import AddTask from '../../src/Componentes/AddTask/AddTask';
import './index.scss';

const List = () => {

    return <>
        <div>
            <Header />
        </div>
        <div>
            <Title />
        </div>
        <div  className='tasks'>
            <div className='tasks__grid'>
                <ul className='tasks__info'>
                    <li>Tarefa</li>
                    <li>Status</li>
                    <li>Opções</li>
                </ul>
            </div>
            <div className='tasks__list'>
                <AddTask/>
            </div>
        </div>
    </>;
}

export default List