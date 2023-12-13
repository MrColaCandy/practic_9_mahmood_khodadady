import React from 'react'
import "./style.css"
const Form = ({children,onSubmit=()=>{},onReset=()=>{}}) => {
  return (
    <form onReset={(e)=>{
      e.preventDefault();
      onReset(e)
    }} className='form' onSubmit={(e)=>{
     e.preventDefault();
     onSubmit(e.target);
    }}>
    {children}
    </form>
  )
}

export default Form