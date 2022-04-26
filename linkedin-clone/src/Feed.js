import React from 'react'
import  SearchIcon  from '@mui/icons-material/Search';
import "./Feed.css"
import Feedoption from './Feedoption';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideocamIcon from '@mui/icons-material/Videocam';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';

const Feed = () => {
  return (
    <div className="feed">
        <div className="feedInput__container">
            <div className="feedInput">
                <SearchIcon />
                <form>
                    <input type="text" placeholder="Start a post"/>
                    <button type="submit"> Post </button>
                </form>
            </div>
            <div className="feed__options">
                <div className="feedoption">
                    <Feedoption Icon={CollectionsIcon} optionName="Photo"  style={{ color: '#70B5F8' }}/>
                    <Feedoption Icon={VideocamIcon} optionName="Video" style={{ color: '#7FC15F'}}/>
                    <Feedoption Icon={WorkIcon} optionName="Job" style={{ color: '#A8D4FF'}}/>
                    <Feedoption Icon={ArticleIcon} optionName="Write Article" style={{ color: '#FC9295'}}/>
                </div>
            </div>
        </div>

        <Post name="Akanksha Verma" description="Sr. Talent Acquisition Executive" message="Software Developer required"/>
    </div>
  )
}

export default Feed