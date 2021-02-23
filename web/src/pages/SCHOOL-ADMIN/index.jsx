import React from 'react'
import './Index.css'
import { connect } from 'react-redux'
import PanelLayout from '../../components/Layouts/PanelLayout/Index'
import Announcement from '../../components/announcements/Index'

export const Index = (props) => {
    return (
        <>
            <PanelLayout selected={1} role={props.state.auth.user.role}>
                <h3>school admin</h3>
                <p>{console.log(props.state.auth.user)}</p>
            </PanelLayout>

        </>
    )
}

const mapStateToProps = (state) => ({
    state : state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
