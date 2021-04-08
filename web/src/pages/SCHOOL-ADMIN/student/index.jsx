import React, { useState, useEffect,createRef } from 'react'
import './Index.css'
import {Link} from 'react-router-dom'
import https from '../../../helpers/https'
import PanelLayout from '../../../components/Layouts/PanelLayout/Index'
import { connect } from 'react-redux'
import { handleFetchStudent } from '../../../store/actions/student.actions'
import  {handleFetchClasses} from '../../../store/actions/classes.actions'
import {handleFetchVillages} from '../../../store/actions/address/addresses.actions'
import { TextField, Grid, Snackbar, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Skeleton from "@material-ui/lab/Skeleton"
import { Box } from '@material-ui/core'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import StudentForm from '../../../components/schoolAdmin/StudentForm'
import { DropzoneArea } from "material-ui-dropzone"

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },

        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: '-5px',
        width: 200,

    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(0),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));


export const Index = (props) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        const updateData = (data) => {
            setRowData(data);
        };
    }
    const dropzoneRef = createRef()
    const openDialog = () => {
    if(dropzoneRef.current){
        dropzoneRef.current.open()
    }
}
    const onExportClick = () => {
        gridApi.exportDataAsExcel({ allColumns: false });
    }
    const searchDivStyle = { backgroundColor: "#dedede", padding: 10, display: "flex" }
    const searchStyle = {
        width: "100%", padding: "10px 20px", borderRadius: 20, outline: 0,
        border: "2px #1F72C6 solid", fontSize: "100%"
    }
    const onFilterTextChange = (e) => {
        gridApi.setQuickFilter(e.target.value)
    }
    let school = null
    let role = null
    let p2 = null
    let edit = null
    if (props.state.auth != undefined) { if (props.state.auth.user != undefined) { school = props.state.auth.user.school; role = props.state.auth.user.role } }
    const [STUDENT, setSTUDENT] = useState(props.state.students)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [uploadPopup, setUploadPopup] = useState(false)
    const [openMsg, setOpenMsg] = useState(false)
    const [msg, setMsg] = useState(null)
    const [type, setType] = useState(null)
    const [ Data, setData] = useState(null)
    const [id, setId] = useState(null)
    const [updating, setUpdating] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [studentClass, setStudentClass] = useState('')
    const [file,setFile] = useState(null)
    const classes = useStyles();
    const [classs, setClasss] = useState([])
    const [studentData, setStudentData] = useState({
        studentClass: null,
        firstName: null,
        lastName: null,
        registrationNumber: null,
        gender: null,
        studentProgram: null,
        dateOfBirth: null,
        address: null,
        scholarship: null,
        ngo: {
            name: null,
            contactPerson: {
                title: null,
                name: null,
                phone: null
            }
        },
        allergies: null,
        permanentHealthConditions: [
        ],
        "guardians": [
            {
                firstName: null,
                lastName: null,
                identificationNumber: null,
                phone: null,
                email: null,
                maritalStatus: null,
                relationship: null,
            }
        ]
    })
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleOpenMsg = (ty, msg) => {
        setMsg(msg)
        setType(ty)
        setOpenMsg(true)
    }
    const handleCloseMsg = () => {
        props.handleFetchStudent(school)
        setData(props.list)
        setOpenMsg(false)
    }
    const handleClose = () => {
        setUploadPopup(false)
    }

const handleUpload = async () => {

    const formData = new FormData()
    formData.append('studentClass', studentClass._id)
    formData.append('students',file)

    const dat = {
        'studentClass': studentClass._id,
        'students':file
    }
    await https.post('/students/create-from-csv' , formData,  {  headers : { 'Content-Type' : 'multipart/form-data', 'Authorization': `Basic ${localStorage.token}` } })
    .then((res)=>{
        handleOpenMsg("success", 'The students data has imported')
        handleClose()
        update()
    }).catch((erro) => {
        console.log("ERROR :",erro)
    })
}


    const formatData = (unformatted) => {
        console.log("&&&&&&&&&&&&&&& DATA TO FORMAT", unformatted)
        let count= 0
        const formatted = []
        unformatted.forEach(i => { 
            formatted.push({
                No: ++count, 
                firstName: i.firstName, 
                lastName: i.lastName, 
                studentClass: props.classes.reduce(function (match, check){ 
                    if(check._id === i.class){
                        let find = check.label;
                        match.push(find)
                    }
                    return match
                    },[])[0],
                 registrationNumber: i.registrationNumber, 
                 gender: i.gender, 
                 studentProgram: i.studentProgram, 
                 dateOfBirth: i.dateOfBirth && (i.dateOfBirth).substring(0,10), 
                 scholarship: i.scholarship, 
                 allergies : i.allergies,
                 guardian1FN: i.guardians && i.guardians[0].firstName,
                 address: 
                    props.villages.reduce(function (match, check){ 
                    if(check._id === i.address){
                        let find = check.name;
                        match.push(find)
                    }
                    return match
                    },[])[0], 
                workingStatus: i.workingStatus,
                ngo: i.ngo && i.ngo.name,ngoPName: i.ngo && i.ngo.contactPerson.name, ngoPTitle: i.ngo && i.ngo.contactPerson.title, ngoPPhone: i.ngo && i.ngo.contactPerson.phone, 
                

                id: i._id }) 
        })
        console.log(formatted, "******************")
        return formatted
    }
    const editRow = (parms) => {
        p2 = Object.assign({}, parms['data']);
        // edit = {
        //     school: school,
        //     level: (LEVELS.find(item => item.name === p2.level))._id,
        //     combination: (COMBINATIONS.find(item => item.name === p2.combination))._id,
        //     label: p2.label,
        // }
        // setClassData(edit)
        setId(parms.value)
        setUpdating(true)
        handleClickOpen()
    }
    // const deleteRow = (parms) => {
    //     console.log(parms.value,"%%%%%")
    //     setId(parms.value)
    //     handleDelete(parms.value)
    //     setUpdating(true)
    // }
    const columns = [
        { headerName: '#', field: 'No', sortable: true, filter: true, checkboxSelection: true, headerCheckboxSelection: true, },
    { headerName: 'First Name', field: 'firstName', sortable: true, filter: true, },
    { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true, },
    { headerName: 'Student Class', field: 'studentClass', },
    { headerName: 'registration Number', field: 'registrationNumber', },
    { headerName: 'gender ', field: 'gender', },
    { headerName: 'studentProgram', field: 'studentProgram', },
    { headerName: 'dateOfBirth', field: 'dateOfBirth', width: 150 },
    { headerName: 'address', field: 'address', width: 150 },
    { headerName: 'allergies', field: 'allergies', width: 150 },
    { headerName: 'scholarship', field: 'scholarship', },
    {headerName: 'Non-Goverment Organization Details', width:200,
        children: [
            { headerName : 'NGO Name',field: 'ngo' },
            { headerName: "Person Name",field: 'ngoPName', columnGroupShow: 'open' },
            { headerName: "Person Title", field: 'ngoPTitle', columnGroupShow: 'open' },
            { headerName: "Person Phone", field: 'ngoPPhone', columnGroupShow: 'open' },
        ]
    },
    {headerName: 'Guardian One', width:200,
        children: [
            { headerName : 'Names',field: 'ngo' },
            { headerName: "Person Name",field: 'ngoPName', columnGroupShow: 'open' },
            { headerName: "Person Title", field: 'ngoPTitle', columnGroupShow: 'open' },
            { headerName: "Person Phone", field: 'ngoPPhone', columnGroupShow: 'open' },
        ]
    },
    { headerName: 'ID', field: 'id', hide: true, flex: 1 },
    {
        headerName: "Action", field: "id",
        cellRendererFramework: (params) => <div style={{ display: "flex" }}>
            <div style={{ color: "#1F72C6", cursor: "pointer", borderRadius: "4px", backgroundColor: "whitesmoke", textAlign: 'center', padding: "5px",whiteSpace: "nowrap"  }} className="edit-btn-class" onClick={() => alert("edit")}>Edit</div>
            <div style={{ color: "#f00", cursor: "pointer", borderRadius: "4px", backgroundColor: "whitesmoke", textAlign: 'center', padding: "3px", whiteSpace: "nowrap" }} className="edit-btn-class" onClick={() => alert("edit")}>Delete</div>
        </div>
    }]

    const update = () => {
        props.handleFetchStudent(school)
        props.handleFetchClasses(school)
        setData(props.list)
    }
    
    useEffect(() => {
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
        console.log('CHOOSEN CLASS', studentClass)
    }, [])
    useEffect(() => {
        props.handleFetchVillages()
        update()
        setData(props.list)
        
    if(!uploadPopup){
        setTimeout(() => {
            props.handleFetchStudent(school)
            setData(props.list)
        }, 2000); 
    }
    },[])
    return (
        <div>
            <PanelLayout selected={2} role={role}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="paper-hd"><h2>Students List</h2></div>
                    <div style={{display:"flex"}}><Button onClick={() => setUploadPopup(true)} className='check-btn' style={{ wordWrap: "normal" }}>import a list of Student</Button><Link to={`/schoolAdmin/students/add`} className='check-btn' style={{ wordWrap: "normal" }}>Register a new Student</Link></div>
                </div>
                <div className='classes-cont'>
                    {
                        !isLoading ?
                            <div style={{ width: "100%", height: '100%' }}>
                                <div style={{ height: '90%', boxSizing: 'border-box' }}>
                                    <div style={searchDivStyle}>
                                        <input type="search" style={searchStyle} onChange={onFilterTextChange} placeholder="search ....." />
                                        <Button onClick={() => onExportClick()}>export</Button>
                                    </div>
                                    <div
                                        id="myGrid"
                                        style={{
                                            height: '100%',
                                            width: "100%",
                                        }}
                                        className="ag-theme-alpine">
                                        <AgGridReact
                                            columnDefs={columns}
                                            rowData={formatData(props.list)}
                                            rowSelection={'multiple'}
                                            onGridReady={onGridReady}
                                            sideBar={{ toolPanels: ['columns'] }}
                                        />
                                    </div>
                                </div>
                            </div> :
                            (<Box className="my-bx">
                                <div className="skeleton-line-students">
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
            </PanelLayout>
            <div>
                {/* Form */}
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Register a new Student</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div className="frm" style={{ minWidth: "100%" }}>
                                
                                <StudentForm recordForEdit={recordForEdit} close = {handleClose}/>


                            </div>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

                {/* UPload Student */}
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={uploadPopup}
                    onClose={handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Register a new Student</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div className="frm" style={{ minWidth: "100%" }}>
                                <div>
                                    <form>
                                        <Grid container xs={12} spacing={2} minWidth={12} justify="center" direction="column">

                                            <Grid item xs={12} justify="center">
                                                <TextField
                                                    type="text"
                                                    label="student Class"
                                                    select
                                                    required
                                                    value={studentClass ? studentClass : ""}
                                                    id="select"
                                                    helperText="Please select studentClass"
                                                    variant="outlined"
                                                    fullWidth
                                                    onChange={(e) => setStudentClass(e.target.value)}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <em>NONE</em>
                                                    </MenuItem>
                                                    {props.classes != null ?
                                                        props.classes.map(item => (<MenuItem key={item._id} value={item._id}>{item.level.name}</MenuItem>)) : null
                                                    }
                                                </TextField>
                                                <DropzoneArea
                                                    acceptedFiles={['text/csv']}
                                                    filesLimit={1}
                                                    dropzoneText={"Drag and drop a CSV File here or click to browse"}
                                                    onChange={(files) => setFile(files[0])}
                                                />
                                               
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                            <Button onClick={handleUpload} color="primary">
                                Import
                        </Button>
                        
                    </DialogActions>
                </Dialog>
                <Snackbar open={openMsg} autoHideDuration={6000} onClose={handleCloseMsg}>
                    <Alert onClose={handleCloseMsg} severity={type}>
                        {msg}
                    </Alert>
                </Snackbar>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    const  classes  = state.classes.list
    const villages = state.villages.list
    const { students } = state
    const { list } = students
    return {
        state, list, classes, villages
    }
}

const mapDispatchToProps = dispatch => ({
    handleFetchStudent: (school) => {
         dispatch(handleFetchStudent(school))
    },
    handleFetchClasses: (school) => {
         dispatch(handleFetchClasses(school))
    },
    handleFetchVillages: () => {
         dispatch(handleFetchVillages())
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(Index)

