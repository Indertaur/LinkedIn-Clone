import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Feed.css"
import Feedoption from './Feedoption';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideocamIcon from '@mui/icons-material/Videocam';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
// import firebase from 'firebase/compat/app';
import { db } from './firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';



const Feed = () => {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => (
        db.collection('posts').orderBy('id', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })
            ))
        )
    ), [])

    const sendPosts = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.profileUrl || "",
            id: new Date(),
        })
        setInput("")
    }
   

    return (
        <div className="feed">
            <div className="feedInput__container">
                <div className="feedInput">
                    <SearchIcon />
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start a post" />
                        <button onClick={sendPosts} type="submit"> Post </button>
                    </form>
                </div>
                <div className="feed__options">
                    <div className="feedoption">
                        <Feedoption Icon={CollectionsIcon} optionName="Photo" style={{ color: '#70B5F8' }} />
                        <Feedoption Icon={VideocamIcon} optionName="Video" style={{ color: '#7FC15F' }} />
                        <Feedoption Icon={WorkIcon} optionName="Job" style={{ color: '#A8D4FF' }} />
                        <Feedoption Icon={ArticleIcon} optionName="Write Article" style={{ color: '#FC9295' }} />
                    </div>
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, message, description, photoUrl } }) => (
                    <Post key={id} name={name} message={message} description={description} photoUrl={photoUrl} id={id} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed