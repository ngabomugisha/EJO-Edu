import React from 'react'
import './PanelLayout.css'
import SideMenu from '../../sideMenu/SideMenu'
import RightSide from '../../rightSide/RightSide'
import StickyBox from "react-sticky-box";
import FeedHead from '../../feed/FeedHead';


const PanelLayout = (props) => {


    return (
        <div className="container">
        <div className='side-menu'>

    <StickyBox>
            <SideMenu selected={props.selected} />
    </StickyBox>
        </div>
        <div className='feed'>
        <FeedHead/>
        {props.children}
        </div>
        <div className='right-side'>
    <StickyBox>
            <RightSide/>
    </StickyBox>
        </div>
        </div>
    )
}

export default PanelLayout
