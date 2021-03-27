import React, { useEffect , useState} from 'react'
import './FeedCards.css'
import { connect } from 'react-redux'
import https from '../../helpers/https'
import { handleFetchLessonPlan } from '../../store/actions/lessonPlans.actions'
import { useDispatch, useSelector } from 'react-redux';
import LessonCard from '../feedCard/LessonCard'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PlacesSmokingRooms from 'material-ui/svg-icons/places/smoking-rooms';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  


function LessonCards(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [subject, setSubject] = React.useState('');
    const [subjects, setSubjects] = React.useState('');
    const [plans ,setPlans] = useState(null)

    const handleChange = (event) => {
        setSubject(event.target.value);
        console.log("SELECTED SUBJECT :", subject)
        fetchLessonPlan(subject);
      };

          //get student from selected class
    const fetchLessonPlan = async (subject) => {
        console.log("TRY TO FETCH DATA")
        try {
            await dispatch(handleFetchLessonPlan(subject));
        } catch (error) {
            alert(error)
        } 
    };


useEffect(() => {
    
    async function fetchplans() {
        const req = await https
          .get(`/lessons/plans/${subject}/subject-plan`, {
            headers: { Authorization: `Basic ${localStorage.token}` },
          })
          .then((res) => {
            setPlans(res.data);
            console.log("PLANS : ", res.data);
          })
          .catch(function (err) {
            console.log(err);
          });
        return req;
      }
      fetchplans();
      console.log("TOP OF FETCH")
      fetchLessonPlan(subject);
}, [subject])


useEffect(() => {
    
    async function fetchSubjects() {
        const req = await https
          .get(`/lessons/subjects`, {
            headers: { Authorization: `Basic ${localStorage.token}` },
          })
          .then((res) => {
            setSubjects(res.data);
            console.log("SUBJECTS : ", res.data);
          })
          .catch(function (err) {
            console.log(err);
          });
        return req;
      }
      fetchSubjects();
  
}, [])


    return ( 
        <div className='cards'>

<div className="subject-select">

<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select a subject to filter</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={subject}
          fullWidth
          onChange={handleChange}
          label="Select a subject to filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
              subjects && subjects.map(sub => (
                  <MenuItem key={sub._id} value={sub._id}>{sub.name}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
</div>


            <div className='card'>
                <LessonCard
                    title='Topic: Importance of Biology'
                    details='Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.'
                    tag='Lesson plan'
                    link={{ txt: 'View More Details', link: 'google.com' }}
                    size={5}
                    covered={4}
                    time='12:03pm 26th May, 2020'
                    data={plans}
                />
            </div>
            
    </div>
        )}

function mapStateToProps(state){
  const lesss = state.lessonPlans
  return(lesss) 
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LessonCards)
