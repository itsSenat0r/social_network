import './TopBar.css'

const TopBar = () => {
    return (
        <header>
            <img className='BorderLogo' src='/borderlogo.svg' alt='topbar_logo_border' width={"55%"}></img>
            <ul>
                <img className="MosPromLogo" src="/mospromlogo.svg" alt="topbar_logo" width={'40%'}></img>
                <p>соцсеть</p>
            </ul>
        </header>
    )
}

export default TopBar;