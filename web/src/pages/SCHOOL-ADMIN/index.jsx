import React,{useEffect, useState} from 'react'
import './Index.css'
import { connect } from 'react-redux'
import PanelLayout from '../../components/Layouts/PanelLayout/Index'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchStudent } from '../../store/actions/student.actions'

export const Index = (props) => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    

//get student from selected class
const fetchStudentsData = async () => {
    try {
        await dispatch(handleFetchStudent());
    } catch (error) {
    } finally {
        setIsLoading(false);
        
    }
};
useEffect(() => {
    fetchStudentsData();
}, []);

    return (
        <>
        {!props.state.auth.user ? history.replace('/'):
            <PanelLayout selected={1} role={props.state.auth.user.role}>
                <h3>school admin</h3>
                <p>{console.log(props.state.auth.user)}</p>
            </PanelLayout>
}
        </>
    )
}

const mapStateToProps = (state) => ({
    state : state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
