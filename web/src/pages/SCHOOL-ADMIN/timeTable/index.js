import React, { useEffect, useState } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import PanelLayout from '../../../components/Layouts/PanelLayout/Index'
import https from '../../../helpers/https'
import RemoteData from '../../../components/schoolAdmin/TimeTable'
import TimeTable from './TimeTable'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, Grid, TextField, Box } from '@material-ui/core'
import { Formik, Field, Form } from 'formik'
import Skeleton from "@material-ui/lab/Skeleton"
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const Index = (props) => {
    const school = props.state.auth.user.school;
    const classes = useStyles();
    const [classs, setClasss] = React.useState([]);
    const [teacher, setTeacher] = React.useState([])
    const [subject, setSubject] = React.useState([])
    const [loadTimetable, setLoadTimetable] = useState(false)
    const [data, setData] = useState([])

    const [mon, setMon] = useState([])
    const [tue, setTue] = useState([])
    const [wes, setWes] = useState([])
    const [thu, setThu] = useState([])
    const [fri, setFri] = useState([])

    const [timetabledata, setTimetabledata] = useState({
        events: {
            monday: mon,
            tuesday: tue,
            wednesday: wes,
            thursday: thu,
            friday: fri
        }
    })

    const iniData = {
        "class": "",
        "teacher": "",
        "subject": ""
    }

    const putMon = (dt) => {
        console.log("DATA HAS ARRIVED WELL",dt)
        setMon(dt.reduce(function (fit, opt) {
            if (opt.time.dayOfWeek == 1) {
                var sm = {
                    id: 1,
                    name: opt.subject,
                    type: "custom",
                    startTime:
                        moment("2018-02-23T" +
                        opt.time.starts.substring(0, 2) +
                        ":" +
                        opt.time.starts.substring(2, 4) +
                        ":00"),
                    endTime:
                        moment("2018-02-23T" +
                        opt.time.ends.substring(0, 2) +
                        ":" +
                        opt.time.ends.substring(2, 4) +
                        ":00")
                };
                fit.push(sm);
            }
            return fit;
        }, []))
        setTimeout(() => {
        console.log("INSIDE TIMEOUT",mon)
        if(mon.length > 0){
        setTimetabledata({
            'events':{
                ...timetabledata.events,
                'monday': mon
            }
        })
    }
    }, 1000);
    
    // if(timetabledata.events.monday.length === 0){
    //     putMon(dt)
    // }else{setLoadTimetable(true)}
}




    const onSubmit = values => {
        // alert(JSON.stringify(values, null, 2))

        if (values.class != '' && values.teacher == "" && values.subject == '') {
            async function fetchSubjects() {
                const req = await https.get(`/timetables/${values.class}/class`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
                    .then((res) => {
                        setData(res.data)
                        putMon(res.data)
                    }).catch(function (err) {
                        console.log(err);
                    });
                return req
            }
            console.log(fetchSubjects())
            fetchSubjects()

        }

        else if (values.class == '' && values.teacher != "" && values.subject == '') {
            alert('teacher selected only : ', values.class)
        }
        else if (values.class != '' && values.teacher != "" && values.subject == '') {
            alert('class and teacher selected  : ', values.class)
        }

    }


    useEffect(() => {

        console.log("MONDAY DATA", timetabledata)
        if(timetabledata.events.monday.length != 0){
            setTimeout(() => {
                setLoadTimetable(true)
            }, 2000);
        }

    }, [mon])

    useEffect(() => {

        async function fetchSubjects() {
            const req = await https.get(`/lessons/subjects`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
                .then((res) => {
                    setSubject(res.data)
                    console.log("SUBJECTS : ", res.data)
                }).catch(function (err) {
                    console.log(err);
                });
            return req
        }
        fetchSubjects()

        async function fetchTeachers() {
            const req = await https.get(`/auth/${school}/school-employees`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
                .then((res) => {
                    setTeacher(res.data)
                    console.log("TEACHERS : ", res.data)
                }).catch(function (err) {
                    console.log(err);
                });
            return req
        }
        fetchTeachers()

        async function fetchClasses() {
            const req = await https.get(`/classes/602c1e8feeb9ae2820b62120/school-classes`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
                .then((res) => {
                    setClasss(res.data)
                    console.log("CLASSES : ", res.data)
                }).catch(function (err) {
                    console.log(err);
                });
            return req
        }
        fetchClasses()
    }, [])

    return (
        <div>
            <PanelLayout selected={6} role={props.state.auth.user.role} >
                <div className="timeTable-container">
                    <div>
                        <div className="form-container">
                            <Formik
                                initialValues={iniData}
                                onSubmit={onSubmit}
                            >
                                {(formik) => (
                                    <Form>
                                        <Grid container xs={12} justify="center" spacing={3}>
                                            <Grid item xs={3}>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    name="class"
                                                    label="Class"
                                                    select
                                                    fullWidth
                                                    helperText=" select Class"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {classs != null ?
                                                        classs.map(item => (<MenuItem key={item._id} value={item._id}>{item.label}</MenuItem>)) : ""
                                                    }
                                                </Field>
                                            </Grid>

                                            <Grid item xs={3}>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    name="teacher"
                                                    label="Teacher"
                                                    select
                                                    fullWidth
                                                    helperText="select Teacher"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {teacher != null ?
                                                        teacher.map(item => (<MenuItem key={item._id} value={item._id}>{item.firstName}&nbsp;{item.lastName}</MenuItem>)) : ""
                                                    }
                                                </Field>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    name="subject"
                                                    label="Subject"
                                                    select
                                                    fullWidth
                                                    helperText="select Subject"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {subject != null ?
                                                        subject.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : ""
                                                    }
                                                </Field>
                                            </Grid>
                                            <Grid item xs={3} justify="center">
                                                <Button fullWidth type="submit">check TimeTable</Button>
                                            </Grid>
                                        </Grid>
                                    </Form>)}
                            </Formik>
                        </div>
                    </div>
                    <div className='TimeTable-co'>
                        {
                            loadTimetable ?
                                <TimeTable data={timetabledata} /> : (
                                    <Box>
                                        <div className="skeleton-line">
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                            <Skeleton width="20%" />
                                        </div>
                                    </Box>)
                        }
                    </div>
                </div>
            </PanelLayout>

        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
