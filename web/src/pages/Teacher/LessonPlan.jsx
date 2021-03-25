import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './style.css'
import PanelLayout from '../../components/Layouts/PanelLayout/Index'
import Feed from '../../components/feed/Feed'
import LessonCards from '../../components/feedCards/LessonCards';
import { handleFetchLessonPlan } from '../../store/actions/lessonPlans.actions'
import { useDispatch, useSelector } from 'react-redux';

export const LessonPlan = (props) => {


    return (
        <PanelLayout selected={3} role={props.state.auth.user.role}>
        <div className="assignment-container">
                <Feed>
                    <LessonCards/>
                    </Feed>
        </div>
        </PanelLayout>
    )
}

const mapStateToProps = (state) => ({
    state : state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonPlan)
