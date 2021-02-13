import React, {useState} from 'react'
import './Feed.css'
import Button from '@material-ui/core/Button'
import FeedCards from '../feedCards/FeedCards'
import NewAssignment from '../newAssignment/NewAssignment'



function Feed() {

    const [page, setPage] = useState(null)
    return (
        <div className='feed'>
            <div className='hd'>
                <div className='hd-txt'>
                    <h2>Overview</h2>
                </div>
                <div className='hd-btn'>
                    <Button variant="outlined" size="medium" color="primary" onClick={()=>{
                        setPage('newAssignment')
                    }}>
                        New Assignment
                    </Button>
                    <Button variant="outlined" size="medium" color="primary">
                        New Lesson Plan
                    </Button>
                </div>
                </div>
                <NewAssignment/>
        </div>
    )
}

export default Feed
