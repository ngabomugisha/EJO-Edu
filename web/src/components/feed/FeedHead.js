import React, { useState, useEffect }  from 'react'
import './Feed.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import https from "../../helpers/https"
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import PanelLayout from "../../components/Layouts/PanelLayout/Index";
import Feed from "../../components/feed/Feed";
import Mixed from "../../components/feedCards/Mixed";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, TextField, MenuItem, Grid } from "@material-ui/core";
import { Formik, useFormik, Field, Form } from "formik";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function FeedHead(props) {
    const teacher = props.state.auth.user._id;

    const classSelectes = ((JSON.parse(localStorage.getItem("unitSelected"))).class)
    const subjectSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).subject)
    const topicSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).topic)
    const subTopSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).subtopic)
    const unitSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).unit)
    console.log("TEACHER",teacher)
    const [data,setData] = useState(null)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [classs, setClasss] = React.useState(null);
  const [clas, setClas] = React.useState(null)
  const [subject, setSubject] = React.useState(null);
  const [sub, setSub] = React.useState(null);
  const [topic, setTopic] = React.useState(null);
  const [top, setTop] = React.useState(null);
  const [subTopic, setSubTopic] = React.useState(null);
  const [subTop, setSubTop] = React.useState(null);
  const [unit, setUnit] = useState(null)
  const [uni, setUni] = useState(null)
  const initValue = {
    class: "",
    subject: "",
    topic: "",
    subtopic: "",
    unit: "",
  };


  const handleClickOpen = () => {
      setTimeout(() => {
          
    setOpen(true);
      }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const history = useHistory();
  const [page, setPage] = useState(null);

const handleChange = (e) =>{

    if(e.target.name==="class")
    setClas(e.target.value)

    if(e.target.name==="subject")
    setSub(e.target.value)

    if(e.target.name==="topic")
    setTop(e.target.value)

    if(e.target.name==="subTopic")
    setSubTop(e.target.value)

    if(e.target.name==="unit"){
    setUni(e.target.value)
    let DATA = {
        "class": clas,
        "subject":sub,
        "topic" : top,
        "subtopic":subTop,
        "unit": uni,
    }
    localStorage.setItem("unitSelected", JSON.stringify(DATA))
    }

}
useEffect(() => {
    
    async function fetchUnit() {
        const req = await https.get(`/lessons/units/${subTop}/subTopic-units`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
            .then((res) => {
                setUnit(res.data)
            }).catch(function (err) {
                console.log(err);
            });
        return req
    }
    fetchUnit()
}, [subTop])
useEffect(() => {
    
    async function fetchSupTop() {
        const req = await https.get(`/lessons/subtopics/${top}/topic-subTopics`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
            .then((res) => {
                setSubTopic(res.data)
            }).catch(function (err) {
                console.log(err);
            });
        return req
    }
    fetchSupTop()
}, [top])
useEffect(() => {

    async function fetchTopic() {
        const req = await https.get(`/lessons/topics/${sub}/subject-topics`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
            .then((res) => {
                setTopic(res.data)
            }).catch(function (err) {
                console.log(err);
            });
        return req
    }
    fetchTopic()
    
}, [sub])
  useEffect(() => {

    async function fetchClasses() {
        const req = await https.get(`/class-teachers/${teacher}/teacher-classes`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
            .then((res) => {
                console.log("CLASSES",res.data)
                setClasss(res.data)
            }).catch(function (err) {
                console.log(err);
            });
        return req
    }
    fetchClasses()
    console.log("%%%%%%%%%%",subject)
    setSubject()

if(classSelectes) setClas(classSelectes)
if(subjectSelected) setSub(subjectSelected)
if(topicSelected) setTop(topicSelected)
if(subTopSelected) setSubTop(subTopSelected)
if(unitSelected) setUni(unitSelected)

console.log('THESE ARE DATA SELECTED: CLASS:',clas,"SUBJECT :", sub)
}, [])

    return (
        <>
            <div className="hd">
                <div className="hd-txt">
                    <h2>Overview</h2>
                </div>
                <div className="hd-btn">
                    <Link to='/teacher/newAssignment'>
                        <Button
                            variant="outlined"
                            size="medium"
                            color="primary">
                            New Assignment
                        </Button>
                    </Link>
                    <Link to='/teacher/newLessonPlan'>
                        <Button variant="outlined" size="medium" color="primary">
                            New Lesson Plan
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="check-btn" style={{display:"flex",justifyContent:"center", color: "red"}}>
            <Button onClick={handleClickOpen}>
              Select Subject Topic Sub-topic
            </Button>
            <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
              <DialogTitle>select All</DialogTitle>
              <DialogContent>
                {/* <Formik initialValues={initValue} onSubmit={onSubmit}>
                  {(formik) => ( */}
                    <form>
                    {console.log("%%%%%%%%%%%%%%%%",clas)}
                    <div className="form-field">
                            <TextField
                              label="Class"
                              value={clas}
                              name="class"
                              variant="outlined"
                              type="text"
                              fullWidth="true"
                              onChange={handleChange}
                              select
                              InputLabelProps={{
                                shrink: true,
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {classs &&
                                  classs.map(item => (
                                      <MenuItem key={item._id} value={item.subject}>{item.class.level.name}&nbsp;{item.class.combination.name}&nbsp;{item.class.label}</MenuItem>
                                  ))
                              }
                            </TextField>


                            <TextField
                              label="Subject"
                              value={sub}
                              name="subject"
                              variant="outlined"
                              type="text"
                              fullWidth="true"
                              onChange={handleChange}
                              select
                              InputLabelProps={{
                                shrink: true,
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>{clas &&
                              <MenuItem key={clas._id} value={clas._id}>{clas.name}</MenuItem>}
                            </TextField>




                            <TextField
                              label="Topic"
                              variant="outlined"
                              type="text"
                              value={top}
                              name="topic"
                              fullWidth="true"
                              onChange={handleChange}
                              select
                              InputLabelProps={{
                                shrink: true,
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>

                              {topic &&
                                  topic.map(item => (
                                      <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                                  ))
                              }
                            </TextField>




                            <TextField
                              label="Sub-topic"
                              variant="outlined"
                              type="text"
                              name="subTopic"
                              fullWidth="true"
                              onChange={handleChange}
                              minWidth="xl"
                              value={subTop}
                              select
                              InputLabelProps={{
                                shrink: true,
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {subTopic &&
                                subTopic.map(item => (
                                      <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                                  ))
                              }
                            </TextField>




                            <TextField
                              label="Unit"
                              variant="outlined"
                              type="text"
                              fullWidth="true"
                              name="unit"
                              value={uni}
                              minWidth="xl"
                              onChange = {handleChange}
                              select
                              InputLabelProps={{
                                shrink: true,
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {unit &&
                                  unit.map(item => (
                                      <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                                  ))
                              }
                            </TextField>
                              </div>
                    </form>
                  {/* )}
                </Formik> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    state: state,
  });
  
  const mapDispatchToProps = {};
  
  export default connect(mapStateToProps, mapDispatchToProps)(FeedHead);
  