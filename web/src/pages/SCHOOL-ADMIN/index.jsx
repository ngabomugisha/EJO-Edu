import React from 'react'
import './Index.css'
import { connect } from 'react-redux'

export const Index = (props) => {
    return (
        <div>
            <h2>school- admin</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
