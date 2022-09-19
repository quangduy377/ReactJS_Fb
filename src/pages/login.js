import React, { Fragment, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import loginStyles from '../css/login.module.css'
const PLACEHOLDER_USERNAME = "Type your username here"
const PLACEHOLDER_PASSWORD = "Type your password here"
let usrName
let password

const Login = (props) =>{
    const [placeholderName, setNamePlaceHolder] = useState(PLACEHOLDER_USERNAME)
    const [placeholderPass, setPassPlaceHolder] = useState(PLACEHOLDER_PASSWORD)
    const [hasError, setErrorState] = useState(false)
    const history = useHistory()
    // const [usrName, setUserName] = useState("")
    // const [password, setPassword] = useState("")
    const onClickName=(event)=>{
        setNamePlaceHolder("")
        setErrorState(false)
    }
    const onFocusName=(event)=>{
        setPassPlaceHolder(PLACEHOLDER_PASSWORD)
    }
    const onClickPass=(event)=>{
        setPassPlaceHolder("")
        setErrorState(false)
    }
    const onFocusPassword=(event)=>{
        setNamePlaceHolder(PLACEHOLDER_USERNAME)
    }
    const onLogin= async (event)=>{
        event.preventDefault()
        const user={
            userName:usrName,
            password:password
        }
        console.log(user)
        //process Login here
        const response = await fetch('http://localhost:8080/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        const data = await response.json()
        //login successfully
        if(data.authorized){
            //redirect to main page
            history.push('/')
        }
        //failed
        else{
            //pop up an error message
            setErrorState(true)
        }
    }
    //style={{display: hasError&&"block"}}
    
    return(
        <div className={loginStyles.page}>
            <div className={loginStyles.form}>
                <p className={loginStyles.title}>Login</p>
                <p className={`${loginStyles['message']} ${hasError&&loginStyles["error-message"]}`}>You have entered invalid email or password, please try again!!</p>
                <form className={loginStyles.container}>
                    <label className={loginStyles["username__label"]}>Username</label>
                    <input 
                        type={"text"} 
                        placeholder={placeholderName} 
                        className={loginStyles["input__username"]}
                        onChange={(event)=>{usrName=event.target.value}}
                        onClick={onClickName}
                        onFocus={onFocusName}>
                    </input>
                    <label className={loginStyles["password__label"]}>Password</label>
                    <input 
                        type={"password"} 
                        placeholder={placeholderPass} 
                        className={loginStyles["input__password"]} 
                        onClick={onClickPass} 
                        onChange={(event)=>{password=event.target.value}}
                        onFocus={onFocusPassword}>
                    </input>
                    <a href="https://google.com" className={loginStyles["forgot__password"]}>Forgot password?</a>
                    <button className={loginStyles["submit__button"]} onClick={onLogin}>Login</button>
                    <Link to={"/signup"} className={loginStyles["signup"]}>Click here to sign up</Link>
                </form>
            </div>
        </div>
    )
}
export default Login