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
                    <a className='footer-contact-img-wrap' href='https://www.facebook.com/Together-Volunteer-107134348663151'>
                        <img className='footer-contact-img' src='/imgs/fb.png' alt=''></img>
                    </a>
                    <a className='footer-contact-img-wrap' href='https://www.instagram.com/2gethervolunteer/?fbclid=IwAR3lByQGtdwZCo2fPTupBAG60GzJgInB_x8Ggoi4L297Y-LJOUgp68KEFNY'>
                        <img className='footer-contact-img' src='/imgs/ig.png' alt=''></img>
                    </a>
                    <a className='footer-contact-img-wrap' href='https://twitter.com/TogetherVolunt1?fbclid=IwAR262uHBxcvecmVzIbGA0j80wTDWMdvX0fsuZaFW402hGTq91SWUsYQ9TGk'>
                        <img className='footer-contact-img' src='/imgs/tw.png' alt=''></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;