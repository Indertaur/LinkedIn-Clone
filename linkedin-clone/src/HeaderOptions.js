import React from 'react'
import "./HeaderOptions.css"

const HeaderOptions = ({Avatar,Icon, title}) => {
  return (
    <div className="headerOption">
        <div className="headerOption__Icon">
            {Icon && <Icon />}
        </div>
        <div className="avatar">
            {Avatar && <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQF7egpX9uycIA/profile-framedphoto-shrink_800_800/0/1650082181605?e=2147483647&v=beta&t=UY9nL24ztN0BRvNaEBAAOH-bXrCSHN_b_bYXTM740G4"/>}
        </div>
        <div className="headerOption__title">
            {title}
        </div>
    </div>
  )
}

export default HeaderOptions