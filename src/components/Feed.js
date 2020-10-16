import React, {useEffect, useState} from 'react'; 
import StoryReel from './StoryReel'; 
import MessageSender from './MessageSender'; 
import Post from './Post'; 
import axios from '../axios'
import Pusher from 'pusher-js'

const pusher = new Pusher('8155f633df76da20dd97', {
    cluster: 'us3'
})

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then(res => {
                setPostsData(res.data)
            })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts')
        channel.bind('inserted', function (data) {
            syncFeed() 
        })
    }, []) 

    useEffect(() => {
        syncFeed()
    }, []) 

    return (
        <div className="feed">
            <StoryReel /> 
            <MessageSender /> 
            {
                postsData.map(entry => 
                    <Post 
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamps={entry.timestamps}
                        imgName={entry.imgName}
                        userName={entry.user}
                    /> 
                )
            }
            
        </div>
    )
}

export default Feed 