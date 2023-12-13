import React, { useImperativeHandle, useState } from 'react'
import Form from './components/form'
import NameInput from './components/name-input';
import PasswordInput from './components/password-input';
import EmailInput from './components/email-input';
import CitiesInput from './components/cities-input';
import GenderInput from './components/gender-input';
import SkillsInput from './components/skills-input';
const App = () => {
  const [nameErr, setNameErr] = useState(null);
  const [nameVal, setNameVal] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [emailVal, setEmailVal] = useState("");
  const [citiesErr, setCitiesErr] = useState(null);
  const [citiesVal, setCitiesVal] = useState("");
  const [genderErr, setGenderErr] = useState(null);
  const [genderVal, setGenderVal] = useState("");
  const [skillsErr, setSkillsErr] = useState(null);
  const [skillsVal, setSkillsVal] = useState([]);
  const [passwordErr1, setPasswordErr1] = useState(null);
  const [passwordVal1, setPasswordVal1] = useState("");
  const [passwordErr2, setPasswordErr2] = useState(null);
  const [passwordVal2, setPasswordVal2] = useState("");
  const [oldEmails,setOldEmails]=useState([])

  const handleSubmit = (target) => {
    
    const inputs = [...target.children].filter(i => i.id === "input");
    const formData = new FormData();
    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];

      if (input.dataset.value === "") {
       
        inputs.forEach(i => {
          [...i.children].forEach(c => {
            c.focus()
            c.blur()
          })
        })
        return ;
      }
      
      formData.append(input.dataset.name, input.dataset.value);
    
    }
    const old=oldEmails.find(e=>e===emailVal);
    if(old)
    {
      
      setEmailErr({...emailErr,isError:true,message:"این ایمیل قبلا ثبت شده است."})
      return;
    }
    setOldEmails([...oldEmails,formData.get("email")])
    
  }
  const handleClearForm = (e) => {
    setNameErr(null)
    setNameVal("")
    setEmailErr(null);
    setEmailVal("")
    setPasswordErr1(null)
    setPasswordErr2(null)
    setPasswordVal1("")
    setPasswordVal2("")
    setCitiesErr(null);
    setCitiesVal("")
    setGenderErr(null);
    setGenderVal("")
    setSkillsErr(null);
    setSkillsVal("")
   

  }


  return (
    <Form onReset={handleClearForm} onSubmit={handleSubmit} >
      <NameInput  value={nameVal} setValue={setNameVal} error={nameErr} setError={setNameErr} />
      <EmailInput  value={emailVal} setValue={setEmailVal} error={emailErr} setError={setEmailErr} oldEmails={oldEmails} />
      <PasswordInput  value1={passwordVal1} setValue1={setPasswordVal1} error1={passwordErr1} setError1={setPasswordErr1} value2={passwordVal2} setValue2={setPasswordVal2} error2={passwordErr2} setError2={setPasswordErr2} />
      <CitiesInput  value={citiesVal} setValue={setCitiesVal} error={citiesErr} setError={setCitiesErr} />
      <GenderInput  value={genderVal} setValue={setGenderVal} error={genderErr} setError={setGenderErr}  />
      <SkillsInput  values={skillsVal} setValues={setSkillsVal} error={skillsErr} setError={setSkillsErr} />
      <button>ارسال</button>
      <button type='reset'  >پاکسازی</button>
    </Form>
  )
}

export default App