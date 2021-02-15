import './SideMenu.css';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/icons/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import SideOption from '../sideOption/SideOption';
import { BiHome } from 'react-icons/bi';
import { RiBookletLine } from 'react-icons/ri';
import { IoSettingsOutline} from 'react-icons/io5'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

const renderOptions = (active) => {
  switch (active) {
    case 1:
      
      break;
  
    default:
      break;
  }
}



function SideMenu({selected}) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="side-menu-container">
      <img src={logo} className="logo" />
      <p className="label">For Teacher</p>
      {
        {
            1 : 
            <><Link to="/teacher"><SideOption Icon={BiHome} text="Home" active/></Link>
            <Link to="/teacher/assignment"><SideOption Icon={AssignmentTurnedInOutlinedIcon} text="Assignment" /></Link>
            <SideOption Icon={RiBookletLine} text="Lesson Plan" />
            <SideOption Icon={IoSettingsOutline} text="Settings" /></>,
            2:
            <><Link to="/teacher"><SideOption Icon={BiHome} text="Home"/></Link>
            <Link to="/teacher/assignment"><SideOption Icon={AssignmentTurnedInOutlinedIcon} text="Assignment" active/></Link>
            <SideOption Icon={RiBookletLine} text="Lesson Plan" />
            <SideOption Icon={IoSettingsOutline} text="Settings" /></>,
            3:
            <><Link to="/teacher"><SideOption Icon={BiHome} text="Home"/></Link>
            <Link to="/teacher/assignment"><SideOption Icon={AssignmentTurnedInOutlinedIcon} text="Assignment" /></Link>
            <SideOption Icon={RiBookletLine} text="Lesson Plan" active/>
            <SideOption Icon={IoSettingsOutline} text="Settings" /></>,
            4:
            <><Link to="/teacher"><SideOption Icon={BiHome} text="Home" active/></Link>
            <Link to="/teacher/assignment"><SideOption Icon={AssignmentTurnedInOutlinedIcon} text="Assignment" /></Link>
            <SideOption Icon={RiBookletLine} text="Lesson Plan" />
            <SideOption Icon={IoSettingsOutline} text="Settings" active/></>
        }[selected]
      }
    </div>
  );
}

export default SideMenu;
