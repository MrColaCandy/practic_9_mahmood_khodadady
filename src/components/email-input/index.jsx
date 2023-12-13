import React, { useState } from 'react'
import "./style.css"
import forbiddenEmails from "../../data/forbbidenEmails.json"
const EmailInput = ({value, setValue,error,setError}) => {
  
  
  const validate=(e)=>{
    
    if(e.target.value.trim()==="")
    {
        setError({...error,isError:true,message:"ایمیل اجباری است."})
        return;
    }
    if(forbiddenEmails.find(em=>em===e.target.value.trim()))
    {
      setError({...error,isError:true,message:"ایمیل جز ایمیل های ممنوع است."})
        return;
    }
    
    if( !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.trim()))
    {
        setError({...error,isError:true,message:"ساختار ایمیل نامعتبر است."})
        return;
    }
    
   
    setError(null)
    
  }
  return (
    <div id='input' data-value={value?? ""} data-name="email" className='email-input'>
        <input  onInput={(e)=>{
          validate(e)
        }} onBlur={(e)=>{
            validate(e)
        }} value={value?? ""} onChange={(e)=>{
            setValue(e.target.value.trim())
            validate(e)
        }} placeholder={"ایمیل"} name='email' type='text'/>
        {error?.isError  && <div className='email-error'>{error.message}</div>}
    </div>
  )
}

export default EmailInput