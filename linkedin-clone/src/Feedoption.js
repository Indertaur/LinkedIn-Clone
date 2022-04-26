import React from 'react'
import "./Feedoption.css"

const Feedoption = ({Icon,optionName,style}) => {
  return (
    <div className="Feedoptions">
        {Icon && <Icon className="icon" style={style}/>  }
        {optionName}
    </div>
  )
}

export default Feedoption