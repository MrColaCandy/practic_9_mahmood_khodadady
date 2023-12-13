import React, { createRef, useEffect, useState } from 'react'
import "./style.css"
const GenderInput = ({firstTry,value,setValue,error,setError}) => {
  const genderRef=createRef()
  useEffect(()=>{

    if(value==="")
    {
       const genders= [...genderRef?.current.children];
       genders.forEach(g=>g.checked=false)
    }
  },[value])
  const validate=(e)=>{
      if(firstTry)return;
      if(!e.target.checked && value==="")
      {
        setError({...error,isError:true,message:"یک جنسیت انتخاب کنید."})
        return;
      }
      setError(null)
  }


  return (
   
   <>
    <div ref={genderRef} className='gender-input' id="input" data-name="gender" data-value={value}>
        <div className='title'>جنسیت: </div>
        <label htmlFor='man'>مرد</label>
        <input onBlur={(e)=>{validate(e)}} onChange={(e)=>{
            if(e.target.checked)
            {   
                setValue(e.target.value)
                validate(e)
            }
        }} id='man' value={"man"} type='radio' name='gender'/>
        <label  htmlFor='woman'>زن</label>
        <input onBlur={(e)=>{validate(e)}} onChange={(e)=>{
            if(e.target.checked)
            {
                setValue(e.target.value)
                validate(e)
            }
        }} id='woman' value={"woman"} type='radio' name='gender'/>
        <label htmlFor='unset'>نامشخص</label>
        <input onBlur={(e)=>{validate(e)}} onChange={(e)=>{
            if(e.target.checked)
            {
                setValue(e.target.value)
                validate(e)
            }
        }} id="unset" value={"unset"} type='radio' name='gender'/>
        
    </div>
    {error?.isError && <div className='gender-error'>{error.message}</div>}
   </>
  )
}

export default GenderInput