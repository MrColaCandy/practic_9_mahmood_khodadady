import React, { useState } from 'react'
import "./style.css"
import easyPasswords from "../../data/passwords.json"
const PasswordInput = ({firstTry,value1,value2,error1,error2,setError1,setError2,setValue1,setValue2}) => {
   

    const validate1 = (e) => {
        if(firstTry)return;
        const easy = easyPasswords.find(p => p === e.target.value);
        if (easy) {
            setError1({ ...error1, isError: true, message: "رمز عبور در لیست رمز های آسان است." })
            return;
        }
        if (e.target.value === "") {
            setError1({ ...error1, isError: true, message: "رمز عبور اجباری است." })
            return;
        }
        if (e.target.value.length < 8) {
            setError1({ ...error1, isError: true, message: "رمز عبور کوتاه است." })
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(e.target.value)) {
            setError1({ ...error1, isError: true, message: "رمزعبور باید حداقل شامل یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی و یک عدد باشد" })
            return;
        }

        setError1(null)
    }

    const validate2 = (e) => {
        if(firstTry)return;
        if (e.target.value === "") {
            setError2({ ...error2, isError: true, message: "تایید رمز عبور اجباری است." })
            return;
        }
        if (value1 !== value2) {
           
            setError2({ ...error1, isError: true, message: "رمز های عبور باهم مطابقت ندارند." })
            return;
            

            
        }
        setError2(null)
    }
    return (
        <>
            <div id='input' data-value={value1} data-name="password" className='password-input'>
                <input onInput={(e)=>{
                    validate1(e)
                }} onBlur={(e) => {
                    validate1(e)
                }} onChange={(e) => {
                    setValue1(e.target.value)
                    validate1(e);
                }} type='password' placeholder={"رمز عبور"} />
            {error1?.isError && <div className='password-error'>{error1.message}</div>} 
            </div>
            <div id='input' data-value={value2} data-name="confirm-password" className='password-input' >
                <input onKeyUp={(e)=>{
                    validate2(e)
                }} onBlur={(e)=>{
                    validate2(e)
                }} onChange={(e) => {
                    validate2(e);
                    setValue2(e.target.value)
                }} type='password' placeholder="تایید رمز عبور" />
                {error2?.isError && <div className='password-error'>{error2.message}</div>} 
            </div>
        </>
    )
}

export default PasswordInput