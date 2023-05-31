import React, {   useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredCollege, setCollege] = useState("");
  const [collegeIsValid, setCollegeIsValid] = useState();


  //**************************function is emailReduser for doing their work *********************

  const emailReduser = (state , actions) => {

    if(actions.type === "Input_Type"){
      return {value : actions.val , isValid : actions.val.isValid.includes("@") };
    }

    if(actions.type === "On_Blur"){
      return {value : state.value , isValid : state.value.isValid.includes("@")}
    }
    
    return {value : "" , isValid : null };
  }
  //**************************useReduser********************************* 
  const [emailState , dispachedEmail]   =  useReducer( emailReduser , { value : "" , isValid : false})  


  //getting the College Name here 
  const collegeChangeHandler = (event) => {
    setCollege(event.target.value);
  }
    

  //valid Colllege handler 
  const validatecollegeHandler = (event) => {
     setCollegeIsValid(event.target.value.trim().length >10);
  }

  const emailChangeHandler = (event) => {
    dispachedEmail({type : "Input_Type" , val : event.target.value})
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.value.includes('@') && enteredPassword.trim().length > 6 && enteredCollege.trim().length > 10
    );
  };

  const validateEmailHandler = () => {
    dispachedEmail({type : "On_Blur"})
  };
  
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  // useEffect(()=> {
  
  // const runner =  setTimeout(() => {
  //          console.log("UseEffectRunning");
  //     setFormIsValid(
  //       emailState.value.includes('@') && enteredPassword.trim().length > 6 && enteredCollege.trim().length >10
  //     );

  //   } ,1000)
   
  //   return () =>{
  //     console.log("ClearUp Function");
  //     clearTimeout(runner);
  //   }

  // } , [emailState.value , enteredPassword , enteredCollege]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div 
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">CollegeName</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validatecollegeHandler}
          />
        </div>
       
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
