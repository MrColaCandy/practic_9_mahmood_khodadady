import React, { createRef, useEffect, useState } from 'react'
import "./style.css"
const NameInput = ({firstTry,setValue,value,error,setError}) => {

 
  
  const validate=(e)=>{
    if(firstTry)return;
    if(e.target.value.trim()==="")
    {
        setError({...error,isError:true,message:"نام و نام خانوادگی اجباری است."})
        return;
    }
    if( !/^[\u0600-\u06FF\s]+$/.test(e.target.value.trim()))
    {
        setError({...error,isError:true,message:"نام و نام خانوادگی باید فقط شامل حروف فارسی باشند."})
        return;
    }

    setError(null)
  }
  return (
    <div  id='input' data-value={value?? ""} data-name={"name"}  className='name-input'>
        <input onInput={(e)=>{
           setValue(e.target.value.trim())
           validate(e)
        }}  onBlur={(e)=>{
            validate(e)
        }} value={value?? ""} onChange={(e)=>{
            setValue(e.target.value.trim())
            validate(e)
        }} placeholder={"نام و نام خانوادگی"} name='name' type='text'/>
        {error?.isError  && <div className='name-error'>{error.message}</div>}
    </div>
  )
}

export default NameInput