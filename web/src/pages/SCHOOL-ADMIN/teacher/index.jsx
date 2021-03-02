import React, { useState, useEffect } from 'react'
import './Index.css'
import { Grid, } from '@material-ui/core';
import { connect } from 'react-redux'
import PanelLayout from '../../../components/Layouts/PanelLayout/Index'
import Popup from '../../../components/popup'
import { useForm, Form } from '../../../components/parts/useForm'
import { handleFetchStudent } from '../../../store/actions/student.actions'
import Button from '@material-ui/core/Button'
import Controls from "../../../controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../components/useTable";
import { useDispatch, useSelector } from 'react-redux';

// const useStyles = makeStyles(theme => ({
//     pageContent: {
//         margin: theme.spacing(5),
//         padding: theme.spacing(3)
//     },
//     searchInput: {
//         width: '75%'
//     },
//     newButton: {
//         position: 'absolute',
//         right: '10px'
//     }
// }))


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export const Index = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const { list: ALL_STUDENTS } = useSelector((state) => state.students);
    //const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(ALL_STUDENTS)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    // const addOrEdit = (employee, resetForm) => {
    //     if (employee.id == 0)
    //         employeeService.insertEmployee(employee)
    //     else
    //         employeeService.updateEmployee(employee)
    //     resetForm()
    //     setRecordForEdit(null)
    //     setOpenPopup(false)
    //     setRecords(employeeService.getAllEmployees())
    // }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }


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
            <PanelLayout selected={3} role={props.state.auth.user.role}>


                <Paper >

                    <Toolbar>
                        <Controls.Input
                            label="Search Employees"
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    <Search />
                                </InputAdornment>)
                            }}
                            onChange={handleSearch}
                        />
                        <Controls.Button
                            text="Add New"
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                        />
                        {console.log(records)}
                    </Toolbar>
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            {
                                recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.firstName}>
                                    <TableCell>{item.lastName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary">
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                                )
                            }
                        </TableBody>
                    </TblContainer>
                    <TblPagination />
                </Paper>




                <Popup
                    title="Employee Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}>

                    <Button>king</Button>
                </Popup>
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
