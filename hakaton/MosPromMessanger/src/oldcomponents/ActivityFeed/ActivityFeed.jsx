import './ActivityFeed.css'
import AFPost from './AFPost'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const ActivityFeed = () => {
    const [posts, setPosts] = useState([])
    const [fetching, setFetching] = useState(true)
    const refka = useRef(null)

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            axios.get('http://localhost:3005/')
            .then(data => {
                setPosts([...posts, ...data.data])
            })
            .finally(() => setFetching(false))
        }
    }, [fetching])

    const scrollHandler = () => {
        if (refka.current.scrollHeight - refka.current.scrollTop <= 800) setFetching(true)
    }

    return (
        <div onScroll={scrollHandler} ref={refka} className='ActivityFeed_Container'>
            <div className='ActivityFeed'>
                {posts.map((post, index) => 
                    <AFPost 
                        key={index}
                        postPicture={post.postPicture}
                        postThumbnail={post.postThumbnail}
                        postAutor={post.postAutor}
                        postAutorAvatar={post.postAutorAvatar}
                        postDate={post.postDate}
                        postStatistic={post.postStatistic}
                        postType={post.postType}
                    />
                )}
            </div>
        </div>
    )
}

export default ActivityFeed;