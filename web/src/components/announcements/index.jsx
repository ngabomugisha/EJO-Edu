import React from 'react'
import './Index.css'
import Button from '@material-ui/core/Button'
import Message from '../messages/Index'

function index() {
    return (
        <div className="announcement-container">
            <div className="head">
                <div className="head-btn">
                    <button id='unread'>Unread 60</button>
                    <button id='sent'>Sent</button>
                </div>
                <Button color="primary" variant="outlined" size="medium">New Message</Button>
            </div>
            <Message/>
        </div >
    )
}

export default index
