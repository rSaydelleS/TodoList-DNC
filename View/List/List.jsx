import React from 'react'
import Header from '../../src/Componentes/Header/Header';
import Title from '../../src/Componentes/Title/Title';
import AddTask from '../../src/Componentes/AddTask/AddTask';
import { useState } from 'react';
import Delete from '../../View/Delete/Delete';
import Rename from '../../View/Rename/Rename'
import './index.scss';

const List = () => {

    const [displayStyle, setDisplayStyle] = useState('none');
    const DeleteChange = () => {
    const NewShowDisplay =  displayStyle == 'none' ? 'block' : 'none';
    setDisplayStyle(NewShowDisplay);
    }
    return <>
    <div style={{ display: displayStyle }}  className='hideDelete' >
            <Delete />
    </div>
    <div style={{ display: displayStyle }} className='hideDelete'>
        <Rename/>
    </div>
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
                <AddTask DisplayOff={DeleteChange}/>
            </div>
        </div>
    </>;
}

export default List