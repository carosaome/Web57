import logo from './logo.svg';
import './App.css';
import Button from './Component/Button/Button';
import React, { useState, useEffect } from "react"
import Tag from './Component/Tag/Tag';
import Dropdown from './Component/Dropdown/dropDown';
function App() {
  const [color, setColor] = useState('cornflowerblue')
  console.log(color);
  return (
    <div style={{backgroundColor: color}} className='container'>
      <h1 className='container__title'>
        Random Quote Machine
      </h1>
      <div className='container__content'>
        <p style={{
          color: color
        }} 
        className='container__content-text'>
          The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.

        </p>
        <div style={{
          color: color
        }}  className='container__content-author'>
          <span>
            - Will Durant
          </span>
        </div>
        <div className='container__button'>
          <Button
              primary = {false}
              label='New Queto' 
              backgroundColor = {color}
              size ='large'              
              onClick={() => console.log(1)} 
               />
        </div>
      </div>
      <div className='container__color-box'>
        <Button onClick={()=>{setColor('cornflowerblue')}} size='28px' backgroundColor='cornflowerblue'/>
        <Button onClick={()=> setColor('blueviolet')} size='28px' backgroundColor='blueviolet'/>
        <Button size='28px' backgroundColor='indianred'/>
        <Button size='28px' backgroundColor='deeppink'/>
        <Button size='28px' backgroundColor='forestgreen'/>
      </div>

      <div className='container__tag'>
          <Tag onClick={()=>console.log(2)} text='business'/>
          <Tag text='funny'/>
          <Tag text='meme'/>
          <Tag text='philosophy'/>
      </div>

      <Dropdown options={['Profile', 'Logout', 'Login']}/>
    </div>
  )

}


export default App;
