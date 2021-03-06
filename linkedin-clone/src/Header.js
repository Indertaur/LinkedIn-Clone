import React from 'react'
import logo from './logo.png'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch =  useDispatch();
    
    const AppSignOut = () => {
        dispatch(logout())
        auth.signOut();
    }
    
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="" />
                <div className="headerSearch">
                    {/* <SearchIcon /> */}
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search here"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Divider sx={{ height: 12, m: 0.5 }} orientation="vertical" />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        
                    </Paper>
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home " />
                <HeaderOptions Icon={PeopleAltIcon} title="Network" />
                <HeaderOptions Icon={MailOutlineIcon} title="Messaging" />
                <HeaderOptions Icon={WorkIcon} title="Jobs" />
                <HeaderOptions Icon={AccountBoxIcon} title="Profile" />
                <HeaderOptions onClick={AppSignOut} Avatar={Avatar} title="Sign Out" />
            </div>
        </div>
    )
}

export default Header