import ActivityFeed from "./ActivityFeed/ActivityFeed"
import Menu from './Menu/Menu'
import CV from './Menu/CV'
import Settings from './Menu/Settings'
import Rewards from './Rewards/Rewards'
import Cases from './Menu/Cases'
import Groups from './Menu/Groups/Groups'
import Analitics from './Menu/Analitics'
import Quests from './Rewards/Quests'
import Medals from './Rewards/Medals'
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
                    <Route path='/rewards' element={<Rewards
                                                        ProfilePicture='https://picsum.photos/200'
                                                        ProfileNickname="Иван IVAN4IK"
                                                        ProfileLevel='4'
                                                        ProfileXP='355/1350'/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/menu/settings' element={<Settings/>}/>
                    <Route path='/menu/cv' element={<CV 
                                                        CVAvatar='https://picsum.photos/200' 
                                                        CVNameSurname='Иван Иванов' 
                                                        CVDateOfBirthday='12.01.2003' 
                                                        CVAboutMe='ООО «ЦифраПлюс» организует кейс по оптимизации IT-инфраструктуры для крупного банка. В рамках проекта будут внедрены решения по безопасности и мониторингу систем. ООО «ЦифраПлюс» организует кейс по оптимизации IT-инфраструктуры для крупного банка. В рамках проекта будут внедрены решения по безопасности и мониторингу систем.'
                                                        CVCompetencies='Unix-like Systems, Python, MongoDB, Windows, Net'
                                                        CVRewards={{
                                                            "RewImg": "https://picsum.photos/200",
                                                            "RewName": "Как яблочки!",
                                                            "RewLink": "/menu"
                                                        }}/>}/>
                    <Route path='/menu/cases' element={<Cases
                                                        CaseAutorImg='https://picsum.photos/200'
                                                        CaseAutorName='ООО "ЦифраТех"'
                                                        CaseThumbnailInShort='Автоматизированное решение проблем с нагрузкой у дерева серверов'
                                                        CompletedCases={{
                                                            "CaseAutorImg": "https://picsum.photos/200",
                                                            "CaseAutorName": "Компания «ИнноваТех»",
                                                            "CaseThumbnailInShort": "Оптимизация IT-инфраструктуры крупного банка"
                                                        }}/>}/>
                    <Route path='/menu/groups' element={<Groups/>}/>
                    <Route path='/menu/analitics' element={<Analitics/>}/>
                    <Route path='/rewards/medals' element={<Medals/>}/>
                    <Route path='/rewards/quests' element={<Quests/>}/>
            </Routes>
        </div>
    )
}

export default MainContainer;