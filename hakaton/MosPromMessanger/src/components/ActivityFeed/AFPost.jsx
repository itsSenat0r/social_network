import './AFPost.css'
import { FaHeart, FaComment, FaReply } from "react-icons/fa";
const AFPost = (props) => {

    let i = 'Пост';
    if (props.postType === 'Case') i = "Кейс"
    else if (props.postType === 'Event') i = "Событие"

    return (
        <div className="Post_Container">
            <div className='PostType'>
                <p>{i}</p>
            </div>
            <div className="Post">
                <div className="PostHeader">
                    <img src={props.postAutorAvatar} alt='group avatar'></img>
                    <div className="PostHeader_Container">
                        <div className='PostHeaderNameDate'>
                            <h3>{props.postAutor}</h3>
                            <p>{props.postDate}</p>
                        </div>
                    </div>
                </div>
                <div className="PostBody">
                    <img className="PostBodyPicture" src={props.postPicture} alt='post picture'></img>
                    <p>{props.postThumbnail}</p>
                </div>
                <div className="PostFooter">
                    <div className="PostStatisticLikes">
                        <FaHeart/>
                        {props.postStatistic[0]}
                    </div>
                    <div className="PostStatisticComments">
                        <FaComment/>
                        {props.postStatistic[1]}
                    </div>
                    <div className="PostStatisticReposts">
                        <FaReply/>
                        {props.postStatistic[2]}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AFPost;