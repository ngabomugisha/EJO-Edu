import React ,{useState}from 'react'
import './Main.css'
import SideMenu from '../../components/sideMenu/SideMenu'
import Feed from '../../components/feed/Feed'
import RightSide from '../../components/rightSide/RightSide'
import StickyBox from "react-sticky-box";


function Main() {

const [page, setPage] = useState(null)

    return (
        <div className="container">
        <div className='side-menu'>

    <StickyBox>
            <SideMenu/>
    </StickyBox>
        </div>
        <div className='feed'>
            <Feed />
        </div>
        <div className='right-side'>
    <StickyBox>
            <RightSide/>
    </StickyBox>
        </div>
        </div>
    )
}

export default Main
