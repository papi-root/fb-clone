import React from 'react' 
import './Post.css'
import { Avatar } from '@material-ui/core'; 
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import axios from '../axios'

const Post = ({ profilePic, imgName, userName, timestamps, message }) => {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" /> 
                <div className="post_topInfo">
                    <h3> {userName} </h3>
                    <p>{new Date(parseInt(timestamps)).toUTCString()}</p>
                </div> 
            </div> 
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            {
                imgName ? (
                    <div className="post_image">
                        <img src={`https://papi-fb-backend.herokuapp.com/retrieve/images/single?name=${imgName}`} />
                    </div>
                ) : (
                    console.log('DEBUG ==>> no image here !')
                )
            }
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon /> 
                    <p> Like </p>
                </div> 

                <div className="post_option">
                    <ChatBubbleOutlineIcon /> 
                    <p> Comment </p>
                </div> 
                
                <div className="post_option">
                    <NearMeIcon /> 
                    <p> Share </p>
                </div> 
                
                <div className="post_option">
                    <AccountCircleIcon /> 
                    <ExpandMoreOutlinedIcon /> 
                </div>  
            </div>
        </div>
    )
}

export default Post; 