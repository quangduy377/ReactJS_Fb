import React, { Fragment, useState } from "react"
import loginStyles from '../css/login.module.css'
const PLACEHOLDER_USERNAME = "Type your username here"
const PLACEHOLDER_PASSWORD = "Type your password here"

let inputStyle=null
const Login = (props) =>{
    const [placeholderName, setNamePlaceHolder] = useState(PLACEHOLDER_USERNAME)
    const [placeholderPass, setPassPlaceHolder] = useState(PLACEHOLDER_PASSWORD)
    // const [usrName, setUserName] = useState("")
    // const [password, setPassword] = useState("")
    const onClickName=(event)=>{
        setNamePlaceHolder("")
        inputStyle="2px solid black"
    }
    const onFocusName=(event)=>{
            setPassPlaceHolder(PLACEHOLDER_PASSWORD)
    }
    const onClickPass=(event)=>{
        setPassPlaceHolder("")
    }
    const onFocusPassword=(event)=>{
        setNamePlaceHolder(PLACEHOLDER_USERNAME)
    }

    return(
        <div className={loginStyles.page}>
            <div className={loginStyles.form}>
                <p className={loginStyles.title}>Login</p>
                <form>
                    <label className={loginStyles["username__label"]}>Username</label>
                    <input 
                        type={"text"} 
                        placeholder={placeholderName} 
                        className={loginStyles["input__username"]}
                        style={{borderBottom: inputStyle?inputStyle:loginStyles["input__username"]["border-bottom"]}} 
                        onClick={onClickName}
                        onFocus={onFocusName}>
                    </input>
                    <label className={loginStyles["password__label"]}>Password</label>
                    <input 
                        type={"text"} 
                        placeholder={placeholderPass} 
                        className={loginStyles["input__password"]} 
                        onClick={onClickPass} 
                        onFocus={onFocusPassword}>
                    </input>
                    <a href="https://google.com" className={loginStyles["forgot__password"]}>Forgot password?</a>
                    <button className={loginStyles["submit__button"]}>Login</button>
                    <a href="https://google.com" className={loginStyles["signup"]}>Click here to sign up</a>
                </form>
            </div>
        </div>
    )
}
export default Login