import React, { useState, useEffect } from 'react'
import './Index.css'
import https from '../../../helpers/https'
import PanelLayout from '../../../components/Layouts/PanelLayout/Index'
import { connect } from 'react-redux'
import AGTABLE from '../../../components/parts/AG_TABLE'
import { handleFetchClasses } from '../../../store/actions/classes.actions'
import { handleFetchCombination } from '../../../store/actions/combinations.actions'
import { handleFetchLevels } from '../../../store/actions/levels.actions'
import { TextField, Grid, Snackbar, Switch, Select, MenuItem, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Skeleton from "@material-ui/lab/Skeleton"
import { Box } from '@material-ui/core'
import EditorWrapText from 'material-ui/svg-icons/editor/wrap-text'


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
    let school = null
    let p2 = null
    let edit = null
    if (props.state.auth != undefined) school = props.state.auth.user.school;
    const { list: CLASSES } = props.state.classes
    const { list: COMBINATIONS } = props.state.combinations
    const { list: LEVELS } = props.state.levels
    // console.log("******&&&&&&^^^^^^%%%%%%%%$$$$$$$", CLASSES)
    // console.log("******&&&&&&^^^^^^%%%%%%%%$$$$$$$", props.state)
    const [openMsg, setOpenMsg] = useState(false)
    const [Data, setData] = useState([])
    const [id, setId] = useState(null)
    const [updating, setUpdating] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const classes = useStyles();
    const [classData, setClassData] = useState({
        school: school,
        level: null,
        combination: null,
        label: null
    })
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const handleClickOpen = () => {
        console.log("^^^^^^^^^^^^^^^^^", edit)
        setOpen(true);
    };

    const handleCloseMsg = () => {
        setOpenMsg(false)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleUpdate = () => {
        // setIsLoading(true)
        console.log("$$$$$$$$$$$$$$$$", id)
        if (classData.level !== null && classData.combination !== null && classData.label !== null)
            https.put(`/classes/${id}`, classData, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
                .then((res) => {
                    if (res.status == 200) {
                        setOpenMsg(true);
                        setOpen(false)
                        update()
                    }
                    else {
                        return alert("something went wrong")
                        setOpen(false)
                    }
                })
        setOpen(false);
        setUpdating(false)
    };
    const handleCreate = () => {
        update()
        setIsLoading(true)
        if (classData.level !== null && classData.combination !== null && classData.label !== null)
            https.post('/classes/', classData, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
                .then((res) => {
                    if (res.status == 200) {
                        setOpenMsg(true);
                        setOpen(false)
                        update()
                    }
                    else {
                        return alert("something went wrong")
                        setOpen(false)
                    }
                })
        // setOpen(false);
    };

    const handleChange = e => {
        if (e.target.name === 'level') setClassData(
            {
                ...classData,
                level: e.target.value
            })

        if (e.target.name === 'combination') setClassData(
            {
                ...classData,
                combination: e.target.value
            })

        if (e.target.name === 'label') setClassData(
            {
                ...classData,
                label: e.target.value
            })
    }
    const formatData = (unformatted) => {
        let i = 1
        const formatted = []
        //if (unformatted.combination != null && unformatted.level != null && unformatted.label != null)
        unformatted.forEach(i => formatted.push({ level: i.level.name, combination: i.combination.name, label: i.label, id: i._id }))
        return formatted
    }
    const editRow = (parms) => {
        console.log("************", parms)
        const level = parms['data']['level']
        const combination = parms['data']['combination']
        const label = parms['data']['label']
        p2 = Object.assign({}, parms['data']);
        edit ={
            school: school,
            level: (LEVELS.find(item => item.name === p2.level))._id,
            combination: (COMBINATIONS.find(item => item.name === p2.combination))._id,
            label: p2.label,
        }
        setClassData(edit)
        setId(parms.value)
        setUpdating(true)
        handleClickOpen()
    }
    const columns = [{ headerName: 'Level', field: 'level', sortable: true, filter: true, checkboxSelection: true, flex: 1 },
    { headerName: 'Combination', field: 'combination', sortable: true, filter: true, flex: 1 },
    { headerName: 'ID', field: 'id', hide: true},
    { headerName: 'Label', field: 'label', flex: 1 },
    { headerName: "Action", field: "id",
        cellRendererFramework: (params) => <div>
            <div style={{color:"#1F72C6", cursor: "pointer", borderRadius:"4px", backgroundColor: "whitesmoke", textAlign: 'center'}} className="edit-btn-class" onClick={() => editRow(params)}>Edit</div>
        </div>
    }]

    const update = () => {
        props.handleFetchClasses(school)
        props.handleFetchCombination()
        props.handleFetchLevels()
        setTimeout(() => {
            setData(formatData(CLASSES))
            setIsLoading(false)
        }, 2000);
    }

    useEffect(() => {
        update()

    }, [])
    return (
        <div>
            <PanelLayout selected={4} role={props.state.auth.user.role}>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="paper-hd"><h2>Classes List</h2></div>
                    <div className='add-btn'><button onClick={handleClickOpen} className='check-btn' style={{ wordWrap: "normal" }}>Add a new class</button></div>
                </div>
                <div className='classes-cont'>

                    {
                        !isLoading ?
                            <AGTABLE
                                data={Data}
                                columns={columns} /> :
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
                    <DialogTitle id="max-width-dialog-title">Create a new class</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div className="frm" style={{ minWidth: "100%" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sm={4}>

                                        <TextField
                                            label="Level"
                                            value={classData.level}
                                            name="level"
                                            variant="outlined"
                                            type="text"
                                            fullWidth
                                            onChange={handleChange}
                                            select
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {LEVELS &&
                                                LEVELS.map(item => (
                                                    <MenuItem key={item._id} value={item._id}>{item.name}&nbsp;</MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={4} sm={4}>

                                        <TextField
                                            label="Combination"
                                            value={classData.combination}
                                            name="combination"
                                            variant="outlined"
                                            type="text"
                                            fullWidth
                                            select
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {COMBINATIONS &&
                                                COMBINATIONS.map(item => (
                                                    <MenuItem key={item._id} value={item._id}>{item.name}&nbsp;</MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={4} sm={4}>

                                        <TextField
                                            label="Label"
                                            value={classData.label}
                                            name="label"
                                            variant="outlined"
                                            type="text"
                                            fullWidth
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                                {updating?
                        <Button onClick={handleUpdate} color="primary">
                            Update
                        </Button>:
                        <Button onClick={handleCreate} color="primary">
                            Create
                        </Button>
                        }

                    </DialogActions>
                </Dialog>
                {/* 
                <Snackbar open={openMsg} autoHideDuration={6000} onClose={handleCloseMsg}>
                    <Alert onClose={handleCloseMsg} severity="success">
                        Class created!
                                    </Alert>
                </Snackbar> */}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
    handleFetchClasses: (school) => {
        dispatch(handleFetchClasses(school))
    },

    handleFetchCombination: () => {
        dispatch(handleFetchCombination())
    },
    handleFetchLevels: () => {
        dispatch(handleFetchLevels())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
