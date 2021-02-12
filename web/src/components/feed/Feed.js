import React from 'react'
import './Feed.css'
import Button from '@material-ui/core/Button'
import FeedCard from '../feedCard/FeedCard'



function Feed() {
    return (
        <div className='feed'>
            <div className='hd'>
                <div className='hd-txt'>
                    <h2>Overview</h2>
                </div>
                <div className='hd-btn'>
                    <Button variant="outlined" size="medium" color="primary">
                        New Assignment
                    </Button>
                    <Button variant="outlined" size="medium" color="primary">
                        New Lesson Plan
                    </Button>
                </div>

            </div>
            <div className='cards'>
                <div className='card'>
                    <FeedCard
                        title='Topic: Importance of Biology'
                        details='Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.'
                        tag='Lesson plan'
                        link={{ txt: 'View More Details', link: 'google.com' }}
                        size={5}
                        covered={4}
                        time='12:03pm 26th May, 2020'
                    />
                </div>
                <div className='card'>
                    <FeedCard
                        title='Topic: Importance of Biology'
                        details='Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.'
                        tag='Lesson plan'
                        link={{ txt: 'View More Details', link: 'google.com' }}
                        size={5}
                        covered={4}
                        time='12:03pm &nbsp;&nbsp;&nbsp; 26th May, 2020'
                    />
                </div>

                <div className='card'>
                    <FeedCard
                        title='Topic: Importance of Biology'
                        details='Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.'
                        tag='Lesson plan'
                        link={{ txt: 'View More Details', link: 'google.com' }}
                        size={5}
                        covered={4}
                        time='12:03pm &nbsp;&nbsp;&nbsp; 26th May, 2020'
                    />
                </div>

                <div className='card'>
                    <FeedCard
                        title='Topic: Importance of Biology'
                        details='Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.'
                        tag='Lesson plan'
                        link={{ txt: 'View More Details', link: 'google.com' }}
                        size={5}
                        covered={4}
                        time='12:03pm &nbsp;&nbsp;&nbsp; 26th May, 2020'
                    />
                </div>

                <div className='card'>
                    <FeedCard
                        title='Topic: Importance of Biology'
                        details='Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.'
                        tag='Lesson plan'
                        link={{ txt: 'View More Details', link: 'google.com' }}
                        size={5}
                        covered={4}
                        time='12:03pm &nbsp;&nbsp;&nbsp; 26th May, 2020'
                    />
                </div>
            </div>
        </div>
    )
}

export default Feed
