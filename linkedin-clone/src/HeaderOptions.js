import * as React from 'react';
import "./HeaderOptions.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Dropdown from './Dropdown';




const HeaderOptions = ({ Avatar, Icon, title, onClick }) => {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   if (title === "Notifications") {
  //     setAnchorEl(event.currentTarget);
  //   } else if (title === "Sign Out") {
  //     onClick()
  //   }
  // };

  
  const user = useSelector(selectUser)
 

  return (

    <div onClick={onClick} className="headerOption">
      <div className="headerOption__Icon">
        {Icon && <Icon />}
      </div>
      <div className="avatar">
        {Avatar && <Avatar src={user.profileUrl}> {user.email[0]} </Avatar>}
      </div>
      <div className="headerOption__title">
        {title}
       { title === 'Profile' ? <Dropdown /> : ""}
      </div>
    </div>
  )
}

export default HeaderOptions