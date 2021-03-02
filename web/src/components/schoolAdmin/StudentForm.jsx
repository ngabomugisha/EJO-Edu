import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './style.css'
import https from '../../helpers/https'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';





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
export const StudentForm = (props) => {
    const [gender, setGender] = React.useState('');
    const classes = useStyles();
    const [clss, setClss] = useState([])
    const [classs, setClasss] = useState([])
    const [province, setProvince] = useState([])
    const [district, setDistrict] = useState([])
    const [sector, setSector] = useState([])
    const [cell, setCell] = useState([])
    const [village, setVillage] = useState([])
    const [] = useState([])
    const [] = useState([])
    const [] = useState([])
    const [p, setP] = useState("")
    const [d, setD] = useState('')
    const [s, setS] = useState("")
    const [c, setC] = useState('')
    const [v, setV] = useState('')
    const [] = useState('')
    const [] = useState('')
    const [] = useState('')

    const [enableDistrict, setEnableDistrict] = useState(true)
    const [enableSector, setEnableSector] = useState(true)
    const [enableCell, setEnableCell] = useState(true)
    const [enableVillage, setEnableVillage] = useState(true)

    const handleClass = (event) => {
        setClss(event.target.value)
    }
    console.log("wwwwwwwwwwW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@wwwwwwwwwwww")
    console.log(props)
    const handleProvince = (event) => {
        setP(event.target.value)
        setEnableDistrict(false)
    }
    const handleDistrict = (event) => {
        setD(event.target.value)
        setEnableSector(false)
    }
    const handleSector = (event) => {
        setS(event.target.value)
        setEnableCell(false)
    }
    const handleCell = (event) => {
        setC(event.target.value)
        setEnableVillage(false)
    }
    const handleVillage = (event) => {
        setV(event.target.value)
    }
    const handleChange = (event) => {
        setGender(event.target.value);
    };

    useEffect(() => {
        async function fetchDistrict() {
            const request = await https.get(`/addresses/districts/${p}/province-districts`, { headers: { 'Authorization': `Basic ${localStorage.token}` } }
            )
                .then((response) => {
                    setDistrict(response.data)
                });
            return request
        }
        fetchDistrict()
    }, [p])
    useEffect(() => {
        async function fetchSector() {
            const request = await https.get(`/addresses/sectors/${d}/district-sectors`, { headers: { 'Authorization': `Basic ${localStorage.token}` } }
            )
                .then((response) => {
                    setSector(response.data)
                });
            return request
        }
        fetchSector()
    }, [d])
    useEffect(() => {
        async function fetchCell() {
            const request = await https.get(`/addresses/cells/${s}/sector-cells`, { headers: { 'Authorization': `Basic ${localStorage.token}` } }
            )
                .then((response) => {
                    setCell(response.data)
                });
            return request
        }
        fetchCell()
    }, [s])
    useEffect(() => {
        async function fetchVillage() {
            const request = await https.get(`/addresses/villages/${c}/cell-villages`, { headers: { 'Authorization': `Basic ${localStorage.token}` } }
            )
                .then((response) => {
                    setVillage(response.data)
                });
            return request
        }
        fetchVillage()
    }, [c])

    useEffect(() => {
        async function fetchProvinces() {
            const req = await https.get('/addresses/provinces')
                .then((response) => {
                    setProvince(response.data)
                });
                return req
        }
        async function fetchClasses() {
            const req = await https.get('/classes/602c1e8feeb9ae2820b62120/school-classes', { headers: { 'Authorization': `Basic ${localStorage.token}` } })
                .then((res) => {
                    setClasss(res.data)
                }).catch(function (err) {
                    console.log(err);
                });
                return req
        }
        fetchClasses()
        fetchProvinces()
    }, [])
    return (
        <form >

            <Container component="main" minWidth="xl" >
                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        id="dob"
                                        name="dob"
                                        label="Date of birth"
                                        value=""
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={gender}
                                            onChange={handleChange}
                                            label="Gender"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="F">Female</MenuItem>
                                            <MenuItem value="M">Male</MenuItem>
                                            <MenuItem value="O">other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Class</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={clss}
                                            onChange={handleClass}
                                            label="Class"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {classs != null ?
                                                classs.map(item => (<MenuItem key={item._id} value={item._id}>{item.level.name}</MenuItem>)) : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" spacing={1} justify="space-between">
                                <Grid item xs={12} sm={2}>
                                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Province</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={p}
                                            onChange={handleProvince}
                                            label="Province"
                                            fullWidth>

                                            <MenuItem>
                                                <em>None</em>
                                            </MenuItem>
                                            {province != null ?
                                                province.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">District</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={d}
                                            onChange={handleDistrict}
                                            label="District"
                                            fullWidth
                                            disabled={enableDistrict}>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {district != null ?
                                                district.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Sector</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={s}
                                            onChange={handleSector}
                                            label="Sector"
                                            fullWidth
                                            disabled={enableSector}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {sector != null ?
                                                sector.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Cell</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={c}
                                            onChange={handleCell}
                                            label="Cell"
                                            fullWidth
                                            disabled={enableCell}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {cell != null ?
                                                cell.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Village</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={v}
                                            onChange={handleVillage}
                                            label="Village"
                                            fullWidth
                                            disabled={enableVillage}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {village != null ?
                                                village.map(item => (<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>)) : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <Grid >
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Permanent Health Conditions</FormLabel>
                                    <FormGroup aria-label="position" row>
                                        <Grid container direction="row" spacing={3} maxWidth="xs" justify="space-between">
                                            <Grid item xs={12} sm={2}>
                                                <FormControlLabel
                                                    value="VISUAL-DIFFICULTIES"
                                                    control={<Checkbox color="primary" checked/>}
                                                    label="VISUAL-DIFFICULTIES"
                                                    labelPlacement="bottom"
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <FormControlLabel
                                                    value="PHYSICAL-IMPAIREMENT"
                                                    control={<Checkbox color="primary" />}
                                                    label="PHYSICAL-IMPAIREMENT"
                                                    labelPlacement="bottom"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <FormControlLabel
                                                    value="HEARING-DIFFICULTIES"
                                                    control={<Checkbox color="primary" />}
                                                    label="HEARING-DIFFICULTIES"
                                                    labelPlacement="bottom"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <FormControlLabel
                                                    value="LEARNING-DIFFICULTIES"
                                                    control={<Checkbox color="primary" />}
                                                    label="LEARNING-DIFFICULTIES"
                                                    labelPlacement="bottom"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <FormControlLabel
                                                    value="PHSYCHOLOGICAL-DIFFICULTIES"
                                                    control={<Checkbox color="primary" />}
                                                    label="PHSYCHOLOGICAL-DIFFICULTIES"
                                                    labelPlacement="bottom"
                                                />
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <hr />
                            {/* parents's Details */}
                            <Grid item xs={12} minWidth="xl">
                                <Accordion defaultActiveKey="">

                                    {/* Father's Details */}
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Father's Details
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Grid container direction="row" spacing={2}>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            autoComplete="fname"
                                                            name="fFirstName"
                                                            variant="outlined"
                                                            fullWidth
                                                            id="fFirstName"
                                                            label="First Name"
                                                            autoFocus
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            id="fLastName"
                                                            label="Last Name"
                                                            name="fLastName"
                                                            autoComplete="lname"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            id="fatherStatus"
                                                            label="Marital Status"
                                                            name="fatherStatus"
                                                            autoComplete=""
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" spacing={2}>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            autoComplete="fname"
                                                            name="fId"
                                                            variant="outlined"
                                                            fullWidth
                                                            id="fId"
                                                            label="ID Number"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            id="fPhone"
                                                            label="Phone Number"
                                                            name="fPhone"
                                                            autoComplete=""
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            type="email"
                                                            variant="outlined"
                                                            fullWidth
                                                            id="fEmail"
                                                            label="Email"
                                                            name="fEmail"
                                                            autoComplete=""
                                                        />
                                                    </Grid>
                                                </Grid>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    {/* Mother's Details */}
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Mother's Details
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <Grid container direction="row" spacing={2}>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            autoComplete="fname"
                                                            name="mFirstName"
                                                            variant="outlined"
                                                            fullWidth
                                                            id="mFirstName"
                                                            label="First Name"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            id="mLastName"
                                                            label="Last Name"
                                                            name="mLastName"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            id="mStatus"
                                                            label="Marital Status"
                                                            name="mStatus"
                                                            autoComplete=""
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" spacing={2}>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            name="mId"
                                                            variant="outlined"
                                                            fullWidth
                                                            id="mId"
                                                            label="ID Number"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            id="mPhone"
                                                            label="Phone Number"
                                                            name="mPhone"
                                                            autoComplete=""
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <TextField
                                                            type="email"
                                                            variant="outlined"
                                                            fullWidth
                                                            id="mEmail"
                                                            label="Email"
                                                            name="mEmail"
                                                            autoComplete=""
                                                        />
                                                    </Grid>
                                                </Grid>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                            </Grid>




                            <Button
                                type="submit"

                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Register
                            </Button>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        </form>
    )

}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
