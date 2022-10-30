import classes from "./TextSection1.module.css";
import {useState, useEffect} from 'react'

function TextSection1() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const inputHandler = (e)=>{
    setInputValue(e.target.value);
    sessionStorage.setItem('inputValue', e.target.value);
  };
  const textareaHandler = (e) =>{
    setTextareaValue(e.target.value);
    sessionStorage.setItem('textareaValue', e.target.value);
  }

  useEffect(()=>{
    let inputValue = sessionStorage.getItem('inputValue');
    console.log(inputValue);
    setInputValue(inputValue);
    let textareaValue = sessionStorage.getItem('textareaValue');
    setTextareaValue(textareaValue)

  }, [])
  return (
    <div className={classes.container}>
      <input type="text" placeholder="Title of your product" onChange={inputHandler} value={inputValue}/>
      <textarea name="" id="" cols="70" rows="10" maxLength={20} placeholder="Write about your products in 3 paragraphs" onChange={textareaHandler} value={textareaValue}/>
    </div>
  );
}

export default TextSection1;
