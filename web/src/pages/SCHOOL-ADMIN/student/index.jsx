import React, {useState, useEffect} from 'react'
import './Index.css'
import { connect } from 'react-redux'
import PanelLayout from '../../../components/Layouts/PanelLayout/Index'
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchStudent } from '../../../store/actions/student.actions'
import { handleFetchClasses } from '../../../store/actions/classes.actions';

export const Index = (props) => {
    const dispatch = useDispatch();
    const { list: ALL_STUDENTS } = useSelector((state) => state.student);
    const { list: ALL_CLASSES } = useSelector((state) => state.classes);
    const [isLoading, setIsLoading] = useState(true);
    
    // get all classes
    const fetchClassesData = async () => {
        try {
            await dispatch(handleFetchClasses());
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };


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
        fetchClassesData();
    }, []);
    return (
        <>
            <PanelLayout selected={2} role={props.state.auth.user.role}>
                <h3> list of student</h3>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                        <ul>
                            {ALL_STUDENTS.map((student) => (
                                <li key={student._id}>{student.firstName}</li>
                            ))}
                        </ul>
                    )}
            </PanelLayout>

        </>
    )
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
