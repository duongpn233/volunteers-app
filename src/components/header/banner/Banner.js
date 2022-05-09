import './Banner.css';
import { useNavigate } from "react-router-dom";
function Banner(){
    const history = useNavigate();
    const handleLogin = ()=> {
        history("/login");
    }
    return (
        <div className='banner'>
            <img className='banner-img' src='/imgs/banner.png' alt=''></img>
            <div className='banner-btn'>
                <img className='banner-btn-img' src='/imgs/btn-login.png' onClick={handleLogin} alt=''></img>
            </div>
        </div>
    )
}

export default Banner;