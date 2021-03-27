import React, { useState, useEffect } from "react";
import "./style.css";
import https from "../../helpers/https"
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import PanelLayout from "../../components/Layouts/PanelLayout/Index";
import Feed from "../../components/feed/Feed";
import { useHistory } from "react-router-dom";
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

function Main(props) {
    const teacher = props.state.auth.user._id;
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


  const classSelectes = ((JSON.parse(localStorage.getItem("unitSelected"))).class)
  const subjectSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).subject)
  const topicSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).topic)
  const subTopSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).subtopic)
  const unitSelected = ((JSON.parse(localStorage.getItem("unitSelected"))).unit)


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

}, [])

  return (
    <>
      {sessionStorage.getItem("isloggedin") ? (
        <PanelLayout selected={1} role={props.state.auth.user.role}>
         
          <Feed>
          {uni !== "" &&
            <Mixed DATA={uni}/>
          }
          </Feed>
        </PanelLayout>
      ) : (
        history.replace("/")
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
