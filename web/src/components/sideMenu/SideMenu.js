import './SideMenu.css';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/icons/logo.svg';
import SideOption from '../sideOption/SideOption';
import { BiHome } from 'react-icons/bi';
import { RiBookletLine } from 'react-icons/ri';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

function SideMenu() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="side-menu-container">
      <img src={logo} className="logo" />
      <p className="label">For Teacher</p>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <SideOption Icon={BiHome} text="Home" active />
      <SideOption Icon={AssignmentTurnedInOutlinedIcon} text="Assignment" />
      <SideOption Icon={RiBookletLine} text="Lesson Plan" />
    </div>
  );
}

export default SideMenu;
