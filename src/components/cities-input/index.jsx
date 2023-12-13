import React, { useState } from 'react'
import "./style.css"
import allCities from "../../data/allCities.json";
import allowedCities from "../../data/allowedCities.json";

const CitiesInput = ({ firstTry, value,setValue,error,setError}) => {
    
    const validate=(e)=>{
        if(firstTry)return;
        if(e.target.value==="none")
        {
            setError({...error,isError:true,message:"یک شهر را انتخاب کنید."})
            return;
        }

        const allowed=allowedCities.find(c=>c.name===e.target.value)
        if(!allowed)
        {
            setError({...error,isError:true,message:"این شهر جز شهرهای ممنوعه است."})
            return;
        }
        setError(null);
    }
    return (
        <div className='cities-input' id='input' data-name="city" data-value={value} >
            <select value={value} onBlur={(e)=>{
                validate(e);
            }} onChange={(e)=>{
                setValue(e.target.value);
                validate(e)
            }}>
                <option value={"none"}>محل سکونت</option>
                {

                    allCities.map(c => {
                        return <option key={c.id} value={c.name} >{c.name}</option>
                    })
                }
            </select>
            {error?.isError && <div className='cities-error'>{error.message}</div>}
        </div>
    )
}

export default CitiesInput