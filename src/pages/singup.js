import SignUpClasses from '../css/signup.module.css'
import { Link } from 'react-router-dom'
const SignUp = props =>{
    return(
        <div className={SignUpClasses.page}>
            <div className={SignUpClasses.container}>
                <h1 className={SignUpClasses["sign-up"]}>Sign up</h1>
                <h3 className={SignUpClasses["third-party-signup"]}>------&nbsp;&nbsp;&nbsp;&nbsp;Sign up with</h3>
                <div className={SignUpClasses['third-party-container']}>
                    
                    <div className={SignUpClasses['third-party']} style={{marginLeft: "10%"}}>
                        <img src={require("../images/google.png")} alt='dcm' width={"10px"} height={"10px"}></img>
                        <p style={{margin: 0, paddingLeft: '10px', fontSize: '12px'}}>Sign up with Google</p>
                    </div>
                    <div className={SignUpClasses['third-party']} style={{marginLeft: "13.5%"}}>
                        <img src={require("../images/fb.webp")} alt='dcm' width={"20px"} height={"20px"}></img>
                        <p style={{margin: 0, paddingLeft: '10px', fontSize: '12px'}}>Sign up with Facebook</p>
                    </div>
                    {/* <button style={{marginRight: '19%'}}>Sign up with Facebook</button> */}
                </div>
                <br></br><br></br>
                <form className={SignUpClasses.form}>
                    <div className={SignUpClasses["form-container"]}>
                        <div className={SignUpClasses["input-email-name"]}>
                            <label>Name</label>
                            <input className={SignUpClasses.input} type={"text"}></input>
                        </div>
                        <div className={SignUpClasses["input-email-name"]} style={{paddingRight: "24%"}}>
                            <label>Email</label>
                            <input className={SignUpClasses.input} type={"email"}></input>
                        </div>
                    </div>
                    <br></br>
                    <label style={{fontSize: "12px"}}>Password</label><br></br>
                    <input type={"password"} className={SignUpClasses.input} style={{width: "77%"}}></input>
                    <br></br>
                    <div className={SignUpClasses["check-policies"]}>
                        <input type={"checkbox"} style={{margin: 0}}></input>
                        <label style={{paddingLeft: "5px", fontSize: "12px"}}>I have read over the policies and wish to create an account</label>
                    </div>
                    <button className={SignUpClasses["proceed-btn"]}>
                        <img src={require('../images/arrow.png')} alt='dcm' width={"30px"} height={"30px"}></img>
                    </button>
                    <p style={{fontSize: "12px", paddingTop: '25px'}}>Already have an account? <Link to={"/login"} style={{textDecoration: 'none', color: 'red'}}>Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp