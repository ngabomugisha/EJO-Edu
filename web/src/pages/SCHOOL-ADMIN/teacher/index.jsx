import React from 'react'
import './Index.css'
import { connect } from 'react-redux'
import PanelLayout from '../../../components/Layouts/PanelLayout/Index'

export const Index = (props) => {
    return (
        <>
            <PanelLayout selected={3} role={props.state.auth.user.role}>
                <h3>teacher admin</h3>
                <p>{props.state.auth.user}</p>
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
