import React, { useState } from 'react'
import { connect } from 'react-redux'
import './style.css'
import https from '../../helpers/https'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuItem from '@material-ui/core/MenuItem';
import { Formik, Field, Form } from 'formik'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export const TimetableForm = (props) => {
    const [] = React.useState('');
    const classes = useStyles();
    

    const initialValue = {
        "assignedClass": "",
        "teacher": "",
        "subject": "",
        "term": "",
        "time": {
            "dayOfWeek": 0,
            "starts": "",
            "ends": "",
        }

    }


    const onSubmit = values => {

        let convertedData = {
            ...values,
            time:{
                dayOfWeek : parseInt(values.time.dayOfWeek),
                starts: (values.time.starts).substring(0,2)+(values.time.starts).substring(3),
                ends: (values.time.ends).substring(0,2)+(values.time.ends).substring(3)
            }
        }

        alert(JSON.stringify(convertedData, null, 2))
        console.log(convertedData)
        const options = {
            method: 'POST',
            url: '/timetables',
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            data: convertedData
        };

        https.post('/timetables', convertedData, { headers: {'Authorization' : `Basic ${localStorage.token}` } }).then((res) => {
            if(res.status== 200)
            return alert("Slot Recorded");
            else
            return alert("something went wrong")
        })

    }


    
    return (
        <>

            <Container component="main" minWidth="xl" >
                <CssBaseline />
                <div className={classes.paper}>
                    <div className="timetable-form-container" >
                        <Formik
                            initialValues={initialValue}
                            onSubmit={onSubmit}
                        >
                            {() => (
                                <Form>
                                    <Grid container xs={12} minWidth="xs" direction="row" spacing={2}>

                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                required
                                                as={TextField}
                                                label="Classes"
                                                name="assignedClass"
                                                variant="outlined"
                                                type="text"
                                                fullWidth
                                                select
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {props.class != null ?
                                                    props.class.map(item => (<MenuItem key={item._id} value={item._id}>{item.label}</MenuItem>)) : null
                                                }

                                            </Field>

                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                required
                                                as={TextField}
                                                label="Subjects"
                                                name="subject"
                                                variant="outlined"
                                                type="text"
                                                fullWidth
                                                select
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {props.subject != null ?
                                                    props.subject.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : null
                                                }

                                            </Field>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                required
                                                as={TextField}
                                                label="Teachers"
                                                name="teacher"
                                                variant="outlined"
                                                type="text"
                                                fullWidth
                                                select
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {props.teachers != null ?
                                                    props.teachers.map(item => (<MenuItem key={item._id} value={item._id}>{item.firstName}{item.lastName}</MenuItem>)) : null
                                                }

                                            </Field>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <Field
                                                required
                                                as={TextField}
                                                label="choice a day"
                                                name="time.dayOfWeek"
                                                variant="outlined"
                                                type="text"
                                                fullWidth
                                                select
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            >
                                                <MenuItem value="1">
                                                    Monday
                                                </MenuItem>
                                                
                                                <MenuItem value="2">
                                                    Tuesday
                                                </MenuItem>
                                                <MenuItem value="3">
                                                    Wednesday
                                                </MenuItem>
                                                <MenuItem value="4">
                                                    Thursday
                                                </MenuItem>
                                                <MenuItem value="5">
                                                    Friday
                                                </MenuItem>

                                            </Field>

                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <Field
                                                as={TextField}
                                                label="Start Time"
                                                type="time"
                                                fullWidth
                                                variant="outlined"
                                                name="time.starts"
                                                required
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <Field
                                                as={TextField}
                                                label="End Time"
                                                type="time"
                                                name='time.ends'
                                                fullWidth
                                                variant="outlined"
                                                required
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </Grid> 
                                        <Grid item xs={12} sm={3}>
                                            <Field
                                                required
                                                as={TextField}
                                                label="choice Term"
                                                name="term"
                                                variant="outlined"
                                                type="text"
                                                fullWidth
                                                select
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {props.terms!= null ?
                                                    props.terms.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : null
                                                }

                                            </Field>

                                        </Grid>
                                    </Grid>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        create
                                    </Button>

                                </Form>)}
                        </Formik>
                    </div>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        </>
    )

}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TimetableForm)
