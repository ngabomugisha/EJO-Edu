import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import PanelLayout from '../../../components/Layouts/PanelLayout/Index'

export const index = (props) => {
    return (
        <div>
            
            <PanelLayout selected={7} role={props.state.auth.user.role}>
                <h2>Questions bank Page</h2>
            </PanelLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
