import React from 'react'
import './SideOption.css'

function SideOption({ active, text, Icon }) {
    return (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <div className='side-icons'>
        <Icon className='side-icon'/>
        </div>
        <h2>{text}</h2>
      </div>
    );
  }

export default SideOption
