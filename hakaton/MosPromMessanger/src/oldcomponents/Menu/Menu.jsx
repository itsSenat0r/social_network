import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div className="Menu_Container">
            <div className="Menu">
                <Link to="/menu/groups">
                    <div className='MenuGroupsContainer'>
                        <h1>Группы</h1>
                    </div>
                </Link>
                <Link to="/menu/settings">
                    <div className='MenuSettings_Container'>
                        <h1>Настройки</h1>
                    </div>
                </Link>
                <Link to="/menu/cv">
                    <div className='MenuCV_Container'>
                        <h1>Портфолио</h1>
                    </div>
                </Link>
                <Link to="/menu/cases">
                    <div className='MenuCases_Container'>
                        <h1>Кейсы</h1>
                    </div>
                </Link>
                <Link to="/menu/analitics">
                    <div className='MenuAnalitics_Container'>
                        <h1>Аналитика</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menu;