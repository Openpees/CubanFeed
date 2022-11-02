import React from 'react';
import Typography from '@mui/material/Typography';
import './App.css';

const select = (info: any) => {
    var children: any = 0;
    children = document.getElementById("choicesDiv")?.children;
    for (var i = 0; i < children?.length; i++){
        if (children[i].className != info.target.className){
            children[i].style.backgroundColor = 'rgb(179, 100, 255)'
        } else {
            children[i].style.backgroundColor = 'rgb(179, 0, 255)'
        }
    }
}

const QuizComponentBasic = ({title} : any) => {
  return (
    <React.Fragment>
        <br/><br/>
        <div className='titleBackground'>
            <p>{title}</p>
        </div>
        <br/>
        <br/>
        <div className='choicesDiv' id='choicesDiv'>
            <button onClick={select} className='Button B1'>Apple</button>
            <button onClick={select} className='Button B2'>Banana</button>
            <button onClick={select} className='Button B3'>Orange</button>
            <button onClick={select} className='Button B4'>Pear</button>
        </div>
    </React.Fragment>
  )
}

export default QuizComponentBasic;