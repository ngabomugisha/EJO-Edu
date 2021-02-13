import React from 'react'
import logo from '../../assets/icons/logo.svg'
import './SideMenu.css'
import SideOption from '../sideOption/SideOption'
import { BiHome } from "react-icons/bi";
import { RiBookletLine } from "react-icons/ri";
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

function SideMenu() {
    return (
        <div className='side-menu-container'>
            <img src={logo} className='logo'/>
            <p className='label'>For Teacher</p>

            <SideOption Icon={BiHome} text="Home" active/>
            <SideOption Icon={AssignmentTurnedInOutlinedIcon} text="Assignment" />
            <SideOption Icon={RiBookletLine} text="Lesson Plan" />
        </div>
    )
}

export default SideMenu
