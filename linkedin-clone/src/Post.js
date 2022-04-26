import React from 'react'
import "./Post.css"
import Avatar from '@mui/material/Avatar';
import Feedoption from './Feedoption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({ name, description, message }) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQF7egpX9uycIA/profile-framedphoto-shrink_800_800/0/1650082181605?e=2147483647&v=beta&t=UY9nL24ztN0BRvNaEBAAOH-bXrCSHN_b_bYXTM740G4" />
                <div className="post__info">
                    <h4>{name}</h4>
                    <p >{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__options">
                <Feedoption Icon={ThumbUpIcon} optionName="Like" style={{ color: '#70B5F8' }} />
                <Feedoption Icon={CommentIcon} optionName="Comment" style={{ color: '#70B5F8' }} />
                <Feedoption Icon={ShareIcon} optionName="Share" style={{ color: '#70B5F8' }} />
                <Feedoption Icon={SendIcon} optionName="Send" style={{ color: '#70B5F8' }} />
            </div>
        </div>
    )
}

export default Post