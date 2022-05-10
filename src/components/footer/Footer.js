import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-help'>
                <span className='footer-help-title'>Help</span>
                <div className='footer-help-content'></div>
            </div>
            <div className='footer-feedback'>
                <span className='footer-feedback-title'>Feedback</span>
                <div className='footer-feedback-content'></div>
            </div>
            <div className='footer-contact'>
                <span className='footer-contact-title'>Contact</span>
                <div className='footer-contact-content'>
                    <img className='footer-contact-img' src='volunteers-app/imgs/fb.png' alt=''></img>
                    <img className='footer-contact-img' src='volunteers-app/imgs/ig.png' alt=''></img>
                    <img className='footer-contact-img' src='volunteers-app/imgs/tw.png' alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Footer;