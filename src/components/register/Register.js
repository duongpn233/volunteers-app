import './Register.css'
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
function Register() {
    return (
        <div className="modal">
            <div className="form form--register">
                <div className="form__container">
                    <div className="form__header">
                        <h3 className="form__heading">Register</h3>
                        <Link to="/login" className="form__switch_btn form__switch_btn--login">Login</Link>
                    </div>
                    <div className="form__body">
                        <div className={"form__input"}>
                            <input type="text" id="email1" name="email" className="form__input-entry_bar"
                                placeholder="Enter your email" />
                            <span className="form-message"></span>
                            <span className="form-message"></span>
                        </div>
                        <div className={"form__input"}>
                            <input type="text" id="username" name="userName" className="form__input-entry_bar"
                                placeholder="Enter username" />
                            <span className="form-message"></span>
                        </div>
                        <div className={"form__input"}>
                            <input type="password" id="password1" name="password" className="form__input-entry_bar"
                                placeholder="Enter your password" />
                            <span className="form-message"></span>
                        </div>
                        <div className={"form__input"}>
                            <input type="password" id="password_confirmation" name="passConfirm" className="form__input-entry_bar"
                                placeholder="Re-enter your password" />
                            <span className="form-message"></span>
                        </div>
                        <div className='form__check'>
                            <div className='form__check-wrap'>
                                <input className='form__check-radio' id='radio1' type="radio"></input>
                                <label htmlFor='radio1' className='form__check-label1'></label>
                                <span className='form__check-title'>Volunteer</span>
                            </div>
                            <div className='form__check-wrap'>
                                <input className='form__check-radio' id='radio2' type="radio"></input>
                                <label htmlFor='radio2' className='form__check-label2'></label>
                                <span className='form__check-title'>Student</span>
                            </div>
                        </div>
                    </div>
                    <div className="form__aside">
                        <p className="form__policy">By registering, Did you agree with about
                            <a href="true" className="form__policy-link">Terms of Service</a>{'&'}
                            <a href="true" className="form__policy-link">Privacy Policy</a>
                        </p>
                    </div>
                    <div className="form__controls">
                        <button className="form__controls-btn btn btn--outRegister">BACK</button>
                        <button className="form__controls-btn btn btn--color btn--register">REGISTER</button>
                    </div>
                </div>
                <div className="form__socials">
                    {/* <a href="true" className="form__link form__link--fb">
                        <i className="form__link-icon--fb fab fa-facebook-square" />
                        <span className="form__link-text">Liên kết với Facebook</span>
                    </a> */}
                    {/* <a href="true" className="form__link form__link--gg">
                        <i className="form__link-icon--gg fab fa-google" />
                        <span className="form__link-text">Liên kết với Google</span>
                    </a> */}
                    <FacebookLogin
                        appId={process.env.EACT_APP_FACEBOOK_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"

                        cssClass="form__link form__link--fb"
                        icon={<i className="form__link-icon--fb fab fa-facebook-square" />}
                        textButton="Login with Facebook"
                    />
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Login with Google"

                        cookiePolicy={'single_host_origin'}
                        className="form__link form__link--gg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Register;