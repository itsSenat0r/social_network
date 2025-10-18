import ActivityFeed from "./ActivityFeed/ActivityFeed"
import Menu from './Menu/Menu'
import CV from './Menu/CV'
import Settings from './Menu/Settings'
import RewardsSettings from './Menu/RewardsSettings'
import Rewards from './Rewards'
import Cases from './Menu/Cases'
import Groups from './Menu/Groups'
import Analitics from './Menu/Analitics'
import './MainContainer.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

const MainContainer = () => {
    return (
        <div className="MainContainer">
            <Routes>
                    <Route path='/feed' element={<ActivityFeed/>}/>
                    <Route path='/rewards' element={<Rewards/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/menu/settings' element={<Settings/>}/>
                    <Route path='/menu/cv' element={<CV/>}/>
                    <Route path='/menu/rewards' element={<RewardsSettings/>}/>
                    <Route path='/menu/cases' element={<Cases/>}/>
                    <Route path='/menu/groups' element={<Groups/>}/>
                    <Route path='/menu/analitics' element={<Analitics/>}/>
            </Routes>
        </div>
    )
}

export default MainContainer;