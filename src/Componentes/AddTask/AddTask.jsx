import React from 'react'
import { useState } from 'react';
import "./index.scss";
import Header from '../Header/Header';
import Title from '../Title/Title';

const AddTask = ({ DisplayOff }) => {

const [inputValue, setInputValue] = useState('');
const [meuArray, setMeuArray] = useState([]);
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
    

return <>    
    <div className='add'>
        <div>
            {meuArray.map((item, index) => (
                <li key={index}>
                    <input className='add__todo' defaultValue={item}  />
                    <input className='tasks__open' type='checkbox'></input>
                    <span>
                        <button onClick={DisplayOff}><img src='rename.png' /></button>
                        <button onClick={DisplayOff}><img src='delete.png' /></button>
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
    </div>
    
</>;
}

export default AddTask