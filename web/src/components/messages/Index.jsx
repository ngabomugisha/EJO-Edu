import React from 'react'
import './Index.css'
import Message from './Message/Index'
import MessageBody from './Message-body/Index'

function Index() {
    return (
        <div className="msgs-container">
            <div className="msgs">
                <div className="message">
                    <Message />
                </div>
                <div className="message">
                    <Message />
                </div>
                <div className="message">
                    <Message />
                </div>
                <div className="message">
                    <Message />
                </div>
                <div className="message">
                    <Message />
                </div>
                <div className="message">
                    <Message />
                </div>
                <div className="message">
                    <Message />
                </div>
            </div>
            <div className="msg-body">
                <MessageBody/>
            </div>
        </div>
    )
}

export default Index
