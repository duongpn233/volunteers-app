import './Login.css'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link} from "react-router-dom";
function Login() {
    return (
        <div className="modal">
            <div className="form form--login">
                <div className="form__container">
                    <div className="form__header">
                        <h3 className="form__heading">Login</h3>
                        <Link to="/register" className="form__switch_btn form__switch_btn--register">Register</Link>
                    </div>
                    <div className="form__body">
                        <div className={"form__input"}>
                            <input type="text" id="email2" name="email" className="form__input-entry_bar"
                                placeholder="Enter your email" />
                            <span className="form-message"></span>
                            <span className="form-message"></span>
                        </div>
                        <div className={"form__input"}>
                            <input type="password" id="password2" className="form__input-entry_bar" name="password" placeholder="Enter your password" />
                            <span className="form-message"></span>
                            <span className="form-message"></span>
                        </div>
                    </div>
                    <div className="form__aside">
                        <p className="form__policy form__policy--login">
                            <a href="true" className="form__policy-link form__policy-link--weight">Forgot password</a>
                            <span className="form__policy-separate" />
                            <a href="true" className="form__policy-link form__policy-link--weight form__policy-link--color">Help?</a>
                        </p>
                    </div>
                    <div className="form__controls">
                        <button className="form__controls-btn btn btn--outLogin">BACK</button>
                        <button className="form__controls-btn btn btn--color btn--login">LOGIN</button>
                    </div>
                </div>
                <div className="form__socials">
                    {/* <a href="true" className="form__link form__link--fb">
                        <i className="form__link-icon--fb fab fa-facebook-square" />
                        <span className="form__link-text">Liên kết với Facebook</span>
                    </a>
                    <a href="true" className="form__link form__link--gg">
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

export default Login;