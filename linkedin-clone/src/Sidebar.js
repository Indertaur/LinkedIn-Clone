import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'
const Sidebar = () => {

    const recentItems = (topic) => (
        <div className="sidebar__recent">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" />
                <Avatar sx={{ height: '70px', width: '70px' }} src="https://media-exp1.licdn.com/dms/image/D5635AQF7egpX9uycIA/profile-framedphoto-shrink_800_800/0/1650082181605?e=2147483647&v=beta&t=UY9nL24ztN0BRvNaEBAAOH-bXrCSHN_b_bYXTM740G4" />

            </div>
            <div className="sidebar__desc">
                <h2>Akanksha Verma</h2>
                <h4>Senior Talent Acquisition Executive</h4>
            </div>
            <div className="sidebar__stat">
                <p>Who viewed your profile </p>
                <div className="sidebar__number">
                    <h5>245</h5>
                </div>
            </div>
            <div className="sidebar__stat">
                <p>Views of your post</p>
                <div className="sidebar__number">
                    <h5>357</h5>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recents</p>
                <div>{recentItems("React Developer")}
                {recentItems("Front End Developer")}
                {recentItems("Software Engineer")}
                {recentItems("Php Developer")}
                {recentItems("HR Assistant")}
                </div>
            </div>
        </div>
    )
}

export default Sidebar