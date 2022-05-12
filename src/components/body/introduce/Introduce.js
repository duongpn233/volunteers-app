import './Introduce.css';
function Introduce() {
    return (
        <div className="introduce">
            <div className='introduce-container'>
                <div className="introduce-img-wrap">
                    <img className="introduce-img" src="/imgs/logo1.png" alt=""></img>
                </div>
                <div className='introduce-content'>
                    <span className='introduce-content-title'>Introduce</span>
                    <p className='introduce-content-post'>Learning is never a waste of time, and we want to help you learn more.</p>
                </div>
            </div>
            <div className='introduce-post'>
                <div className='introduce-post-wrap'>
                    <img className='introduce-post-img' src='/imgs/body2.png' alt=''></img>
                    <p className='introduce-post-context'>When they got to the site, both volunteers and students had accomplished their objectives. People can communicate and study in a tiny social network with active content.</p>
                </div>
                <div className='introduce-post-wrap'>
                    <p className='introduce-post-context'>For students: The website offers free cloud-hosted lectures as well as free volunteer opportunities.</p>
                    <img className='introduce-post-img' src='/imgs/body3.png' alt=''></img>
                </div>
                <div className='introduce-post-wrap'>
                    <img className='introduce-post-img' src='/imgs/body1.png' alt=''></img>
                    <p className='introduce-post-context'>For volunteers: If you want to see what it's like to volunteer but don't have time to travel far, or if you want a volunteer certificate for your record, this is the place to go. Then our website is ideal for you.</p>
                </div>
            </div>
        </div>
    )
}

export default Introduce;