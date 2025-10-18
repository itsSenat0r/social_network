import './BottomBar.css';
import { Link } from 'react-router-dom';

const BottomBar = () => {
    return (
            <footer>
                <ul>
                    <Link to='/feed' className='Feed'><p>лента</p></Link>
                    <Link to='/rewards' className='Rewards'><p>достижения</p></Link>
                    <Link to='/menu' className='Menu'><p>меню</p></Link>
                </ul>
            </footer>
    )
}

export default BottomBar;