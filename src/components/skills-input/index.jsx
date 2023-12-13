import React, { createRef, useEffect, useState } from 'react'
import "./style.css"
import skillsData from "../../data/skills.json"
import forbiddenSkills from "../../data/forbiddenSkills.json"
const SkillsInput = ({values ,setValues,error,setError}) => {

    const skillRef=createRef()
    useEffect(()=>{
        
      if(values==="")
      {
           [...skillRef?.current.children].forEach(s=>s.children[0].checked=false);
      }
    },[values])
    const validate=(e)=>{
        
        if(values.length===0)
        {
            setError({...error,isError:true,message:"یک مهارت را انتخاب کنید."})
            return;
        }

        
        for (let index = 0; index < values.length; index++) {
            const val = values[index];
            if(forbiddenSkills.find(s=>s===val))
            {
                setError({...error,isError:true,message:"برخی از مهارت ها مجاز نمی باشند."})
                return;
            }
            
        }
   
        setError(null)
    }
  return (
    <>
    <div className='skills-title'>مهارت ها</div>
    <div ref={skillRef} className='skills-input' id='input' data-name="skills" data-value={values}>
    
        
        {
         skillsData.map(s=>{
 
             return <label key={s} htmlFor={s} >{s}
             
             <input onInput={(e)=>{
                
                validate(e)
             }} onBlur={(e)=>{
                validate(e);
             }}  onChange={(e)=>{
                
                 if(e.target.checked)
                 {
                     setValues([...values,e.target.value]);
                 }
                 else
                 {
                     setValues(values.filter(s=>s!==e.target.value))
                 }

                
             }} id={s} key={s} value={s} type='checkbox'/>
             </label>
            
         })
        }
     </div>
    
    {error?.isError  && <div className='skills-error'>{error.message}</div>}
    </>
  )
}

export default SkillsInput