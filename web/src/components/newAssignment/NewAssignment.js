import React, {useState} from 'react'
import './NewAssignment.css'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from '@material-ui/core';
import Slide1 from './assignmentSlide/Slide1'
import Slide2 from './assignmentSlide/Slide2'
import { useSelector, useDispatch} from "react-redux"

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});



function NewAssignment() {
    const slide = useSelector(state => state.slide)
    const ass = useSelector(state => state.assignment)
    const dispatch = useDispatch();
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [page, setPage] = useState('slide1')
/*
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

*/
    return (
        <div className="new-ass-container">
            <div className={classes.root}>
                <LinearProgress variant="determinate" value={progress}/>
            </div>
            <div className='assignment-field'>
                {slide == 1 ? <Slide2/> : null}
            </div>
            <div className='ft-btn'>
                <Button color='primary' className="btn-next" size="large"
                onClick={(slide <= 5 ? ()=> dispatch({type: "record", payload: 'robert'}) : ()=> dispatch({type: "Reset"}))}
                style={{
                borderRadius: 5,
                backgroundColor: "#1f75c6",
                padding: "7px 15px",
                fontSize: "15px",
                color: "#fff",
                width: '200px',
                textTransform: 'capitalize'}}
                >
                Next
                </Button>
                {console.log(ass)}
            </div>
        </div>
    )
}

export default NewAssignment;
