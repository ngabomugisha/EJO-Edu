import React,{useState, useEffect} from "react";
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import https from '../../../helpers/https'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TimeTable from '../../../pages/SCHOOL-ADMIN/timeTable/TimeTable'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export const LessonPlan_start = ({ formData, setForm, navigation }) => {
  const teacherId = useSelector((state) => state.auth.user._id);
  fetchSubjects()
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  console.log("TEACHE ID 2: ",teacherId)
  const [ slot, setSlot] = useState(null)
  console.log("THE SLOT WE HAVE : ", slot)
  const handleClickOpen = () => {
    setOpen(true);
    setScroll('paper');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  const [teacher, setTeacher] = React.useState([])
  const [subj, setSubj] = React.useState([])
  const [classs, setClasss] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [mon, setMon] = useState([])
  const [tue, setTue] = useState([])
  const [wed, setWed] = useState([])
  const [thu, setThu] = useState([])
  const [fri, setFri] = useState([])

  const handleDateChange = (date) => {
    setSelectedDate(date);
    time.day = date
    handleClickOpen()
  };
  const { unit, unitPlanId, lessonNumber, keyUnitCompetency, lessonName, time, subject } = formData
  // const { firstName, lastName, nickName } = formData;
  console.log("FORM DATA, ", formData)

  let timetabledata = {
    events: {
        monday: mon,
        tuesday: tue,
        wednesday: wed,
        thursday: thu,
        friday: fri
    }
}
const putMon = (dt) => {

  //this is for monday events
  let sub = null
  setMon(dt.reduce(function (fit, opt) {

      if (opt.time.dayOfWeek == 1) {
          var sm = {
              'id': 1,
              "_id": opt._id,
              'name': 'Subject : \n' + '' + subj.reduce(function (done, cond) {
                  if (cond._id === opt.subj) {
                      var yes = cond.name
                      done = yes
                  }
                  return done;
              }, []) + "& Teacher :" +
                  teacher.reduce(function (done2, cond2) {
                      if (cond2._id === opt.teacher) {
                          var yes2 = cond2.firstName + " " + "" + cond2.lastName;
                          done2 = yes2;
                      }
                      return done2;
                  }, [])
              ,
              'type': "custom",
              'startTime':
                  moment("2018-02-23T" +
                      opt.time.starts.substring(0, 2) +
                      ":" +
                      opt.time.starts.substring(2, 4) +
                      ":00"),
              'endTime':
                  moment("2018-02-23T" +
                      opt.time.ends.substring(0, 2) +
                      ":" +
                      opt.time.ends.substring(2, 4) +
                      ":00")
          };
          fit.push(sm);
      }
      console.log("RETURNED OBJECT:", fit)
      return fit;
  }, []))

  //this is for tuesday events
  setTue(dt.reduce(function (fit, opt) {

      if (opt.time.dayOfWeek == 2) {
          var sm = {
              'id': 2,
              "_id": opt._id,
              'name': subj.reduce(function (done, cond) {
                  if (cond._id === opt.subj) {
                      var yes = cond.name
                      done = yes
                  }
                  return done;
              }, []) + "& Teacher :" +
                  teacher.reduce(function (done2, cond2) {
                      if (cond2._id === opt.teacher) {
                          var yes2 = cond2.firstName + " " + "" + cond2.lastName;
                          done2 = yes2;
                      }
                      return done2;
                  }, [])
              ,
              'type': "custom",
              'startTime':
                  moment("2018-02-23T" +
                      opt.time.starts.substring(0, 2) +
                      ":" +
                      opt.time.starts.substring(2, 4) +
                      ":00"),
              'endTime':
                  moment("2018-02-23T" +
                      opt.time.ends.substring(0, 2) +
                      ":" +
                      opt.time.ends.substring(2, 4) +
                      ":00")
          };
          fit.push(sm);
      }
      console.log("RETURNED OBJECT:", fit)
      return fit;
  }, []))

  //this for wensday
  setWed(dt.reduce(function (fit, opt) {

      if (opt.time.dayOfWeek == 3) {
          var sm = {
              'id': 3,
              "_id": opt._id,
              'name': subj.reduce(function (done, cond) {
                  if (cond._id === opt.subj) {
                      var yes = cond.name
                      done = yes
                  }
                  return done;
              }, []) + "& Teacher :" +
                  teacher.reduce(function (done2, cond2) {
                      if (cond2._id === opt.teacher) {
                          var yes2 = cond2.firstName + " " + "" + cond2.lastName;
                          done2 = yes2;
                      }
                      return done2;
                  }, [])
              ,
              'type': "custom",
              'startTime':
                  moment("2018-02-23T" +
                      opt.time.starts.substring(0, 2) +
                      ":" +
                      opt.time.starts.substring(2, 4) +
                      ":00"),
              'endTime':
                  moment("2018-02-23T" +
                      opt.time.ends.substring(0, 2) +
                      ":" +
                      opt.time.ends.substring(2, 4) +
                      ":00")
          };
          fit.push(sm);
      }
      console.log("RETURNED OBJECT:", fit)
      return fit;
  }, []))

  //this is for thursday
  setThu(dt.reduce(function (fit, opt) {

      if (opt.time.dayOfWeek == 4) {
          var sm = {
              'id': 4,
              "_id": opt._id,
              'name': subj.reduce(function (done, cond) {
                  if (cond._id === opt.subj) {
                      var yes = cond.name
                      done = yes
                  }
                  return done;
              }, []) + "& Teacher :" +
                  teacher.reduce(function (done2, cond2) {
                      if (cond2._id === opt.teacher) {
                          var yes2 = cond2.firstName + " " + "" + cond2.lastName;
                          done2 = yes2;
                      }
                      return done2;
                  }, [])
              ,
              'type': "custom",
              'startTime':
                  moment("2018-02-23T" +
                      opt.time.starts.substring(0, 2) +
                      ":" +
                      opt.time.starts.substring(2, 4) +
                      ":00"),
              'endTime':
                  moment("2018-02-23T" +
                      opt.time.ends.substring(0, 2) +
                      ":" +
                      opt.time.ends.substring(2, 4) +
                      ":00")
          };
          fit.push(sm);
      }
      console.log("RETURNED OBJECT:", fit)
      return fit;
  }, []))

  //this is for friday
  setFri(dt.reduce(function (fit, opt) {

      if (opt.time.dayOfWeek == 5) {
          var sm = {
              'id': 5,
              "_id": opt._id,
              'name': subj.reduce(function (done, cond) {
                  if (cond._id === opt.subj) {
                      var yes = cond.name
                      done = yes
                  }
                  return done;
              }, []) + "& Teacher :" +
                  teacher.reduce(function (done2, cond2) {
                      if (cond2._id === opt.teacher) {
                          var yes2 = cond2.firstName + " " + "" + cond2.lastName;
                          done2 = yes2;
                      }
                      return done2;
                  }, [])
              ,
              'type': "custom",
              'startTime':
                  moment("2018-02-23T" +
                      opt.time.starts.substring(0, 2) +
                      ":" +
                      opt.time.starts.substring(2, 4) +
                      ":00"),
              'endTime':
                  moment("2018-02-23T" +
                      opt.time.ends.substring(0, 2) +
                      ":" +
                      opt.time.ends.substring(2, 4) +
                      ":00")
          };
          fit.push(sm);
      }
      console.log("RETURNED OBJECT:", fit)
      return fit;
  }, []))

  if (mon.length > 0) {
      timetabledata = {
          'events': {
              ...timetabledata.events,
              'monday': mon
          }
      }
  }

  if (tue.length > 0) {
      timetabledata = {
          'events': {
              ...timetabledata.events,
              'tuesday': tue
          }
      }
  }

  if (wed.length > 0) {
      timetabledata = {
          'events': {
              ...timetabledata.events,
              'wednesday': wed
          }
      }
  }

  if (fri.length > 0) {
      timetabledata = {
          'events': {
              ...timetabledata.events,
              'friday': fri
          }
      }
  }
}

   function fetchSubjects() {
    const req = https.get(`/timetables/602b9cfc49ce7a0be4a35fc7/teacher`, { headers: { 'Authorization': `Basic ${localStorage.token}` } })
        .then((res) => {
          console.log("RETURNED DATA:",res.data)
            putMon(res.data)
        }).catch(function (err) {
            console.log(err);
        });
    return req
}
useEffect(()=> {
    fetchSubjects()
},[selectedDate])
  return (
    <Container maxWidth="xs">
      <MuiPickersUtilsProvider variant="outlined" utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          variant="outlined"
          value={time.day}
          fullWidth
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>


      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {console.log("********************************$$$$$$$$$$$$$$$$$$$$",timetabledata)}
            <TimeTable data={timetabledata} onChange= {value => setSlot(value)} /> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>


      <TextField
        label="Topic"
        name="subject"
        value={subject}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="subTopic"
        name="keyUnitCompetency"
        value={keyUnitCompetency}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="unit"
        name="unit"
        value={unit}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Lesson Name"
        name="lessonName"
        value={lessonName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};


const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LessonPlan_start)
