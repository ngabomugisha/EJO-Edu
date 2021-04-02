import React, { useState, useEffect } from "react";
import "./style.css";
import https from "../../helpers/https"
import { connect, useDispatch, useSelector } from "react-redux";
import PanelLayout from "../../components/Layouts/PanelLayout/Index";
import Feed from "../../components/feed/Feed";
import { useHistory } from "react-router-dom";
import Mixed from "../../components/feedCards/Mixed";
import { makeStyles } from "@material-ui/core/styles";
import {handleFetchTeacherData, handleSetTeacherData} from '../../store/actions/data/teacher.data.actions'

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

function Main(props) {

  const SELECTED = useSelector(state => state.teacherData)
  const dispatch = useDispatch()
    const teacher = props.auth.user._id;
    console.log("TEACHER",teacher)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [classs, setClasss] = React.useState("");
  const [clas, setClas] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [sub, setSub] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [top, setTop] = React.useState("");
  const [subTopic, setSubTopic] = React.useState("");
  const [subTop, setSubTop] = React.useState("");
  const [unit, setUnit] = useState("")
  const [uni, setUni] = useState("")
 
  const history = useHistory();
  const [page, setPage] = useState(null);

  const classSelectes = null
  const subjectSelected = null
  const topicSelected = null
  const subTopSelected = null
  const unitSelected = null
// if(localStorage.getItem("unitSelected") !== null){
//   const classSelectes = ((JSON.parse(localStorage.getItem("unitSelected"))).class)
//   const subjectSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).subject)
//   const topicSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).topic)
//   const subTopSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).subtopic)
//   const unitSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).unit)

console.log("SELELELELELELELEL",SELECTED)
if(SELECTED !=null){
  const classSelectes = (SELECTED.data.class)
  const subjectSelected = (SELECTED.data.subject)
  const topicSelected = (SELECTED.data.topic)
  const subTopSelected = (SELECTED.data.subtopic)
  const unitSelected = (SELECTED.data.unit)

console.log(classSelectes,subjectSelected,"%%%%%%")

}
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
    setSubject()

    setClas(classSelectes)
    setSub(subjectSelected)
    setTop(topicSelected)
    setSubTop(subTopSelected)
    setUni(unitSelected)
}, [])

  return (
    <>
      {sessionStorage.getItem("isloggedin") ? (
        <PanelLayout selected={1} role={props.auth.user.role}>
         
          {/* <Feed>
            <Mixed DATA={uni}/>
          </Feed> */}


          
        </PanelLayout>
      ) : (
        history.replace("/")
      )}
    </>
  );
}

function mapStateToProps(state){
  const {auth} = state
  const {teacherData} = state
  return{
      auth : auth,
      teacherData : teacherData
  }
}

const mapDispatchToProps =  ({
  handleFetchTeacherData,
  handleSetTeacherData
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
