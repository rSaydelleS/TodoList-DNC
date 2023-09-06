import React from 'react'
import { useState } from 'react';
import "./index.scss";

const AddTask = ({ DisplayOff }) => {

const [inputValue, setInputValue] = useState('');
const [meuArray, setMeuArray] = useState([]);
const [deleted, setDeleted] = useState([]);
const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };
const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue != ''){
        setMeuArray([...meuArray, inputValue]);
        setInputValue('');
    }
    };

    const [dispStyle, setDispStyle] = useState('none');
    const Chagedisplay = () => {
    const NewDisplay =  dispStyle == 'none' ? 'block' : 'none';
    setDispStyle(NewDisplay);
    }

    const deleteAllTask = () => {
        const deleted = [...meuArray];
        deleted.splice('');
        setMeuArray(deleted);
        const NewDisplay =  dispStyle == 'none' ? 'block' : 'none';
        setDispStyle(NewDisplay);
    }
    
    const deleteTask = (index,item) => {
        meuArray.indexOf(item);
        setDeleted(meuArray.splice(index, 1));
        setMeuArray([...meuArray]);
        
    }

return <>   
    <div className='add'>
        <div>
            {meuArray.map((item, index) => (
                <li key={index}>
                    <input value={item}></input>
                    <input className='tasks__open' type='checkbox'></input>
                    <span className='add__check'>
                        <button onClick={DisplayOff}><img src='rename.png' /></button>
                        <button onClick={()=> deleteTask(index, item)}><img src='delete.png' /></button>
                    </span>
                </li>
            ))}
        </div>
        <div >
            <form  className='add__form' onSubmit={handleSubmit}>
                <input
                placeholder='Nova tarefa...' className='add__item'
                type="text" onChange={handleInputChange} value={inputValue} 
                />
                <button className='add__confirm' type="submit"><img src='add.png' /></button>
            </form>
        </div>
        <div>
            <button className='add__delete' onClick={Chagedisplay}>Excluir todas as tarefas</button>
        </div>
        <div className='add__deleteAsk' style={{display : dispStyle}}>
            <h1>Tem certeza que deseja excluir TODAS as tarefas?</h1>
            <span>
                <button onClick={Chagedisplay}>Não</button>
                <button onClick={deleteAllTask}>Sim</button>
            </span>
        </div>
        <div>
            <h2>Tarefas excluídas</h2>
            <ul>
            
        </ul>   
        </div>
    </div>
    
</>;
}

export default AddTask