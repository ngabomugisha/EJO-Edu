import React from 'react'
import { connect } from 'react-redux'
import './PanelLayout.css'
import SideMenu from '../../sideMenu/SideMenu'
import RightSide from '../../rightSide/RightSide'
import StickyBox from "react-sticky-box";
import FeedHead from '../../feed/FeedHead';
import {TEACHER, SCHOOLADMIN} from '../../../pages/Auth/Users'

const PanelLayout = (props) => {


    return (
        <div className="panel-layout-container">
            <div className='side-menu'>

                <StickyBox>
                    <SideMenu selected={props.selected} role={props.state.auth.user.role} />
                </StickyBox>
            </div>
            {
                props.state.auth.user.role === TEACHER ? 
                <>
                    <div className='feed'>
                        <FeedHead />
                        {props.children}
                    </div>
                    <div className='right-side'>
                        <StickyBox>
                            <RightSide />
                        </StickyBox>
                    </div></> :
                <>
                <div className='main-panel'>
                    {props.children}
                </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    state : state
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelLayout)
