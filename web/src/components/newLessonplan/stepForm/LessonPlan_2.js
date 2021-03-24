import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import https from '../../../helpers/https'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import PlusOneRoundedIcon from "@material-ui/icons/PlusOneRounded";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {v4 as uuidv4} from "uuid"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  input: {
    display: "none",
  },
}));

export const LessonPlan_2 = ({ formData, setForm, navigation }) => {

    const [inputs , setInputs] = useState([{id: uuidv4(), knowledge :'', bloomTaxonomyLevel:'',standardCriteriaPerformance :''}])
  const [key, setKey] = useState("home");
  const [units, setUnits] = useState(null)
  const [term, setTerm] = React.useState("");
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeInput = (id ,event) => {
      const newInputs = inputs.map(i => {
          if(id === i.id){
              i[event.target.name] = event.target.value
          }
          return i;
      })
  }


const handleAddFields = () => {
    setInputs([...inputs, {id: uuidv4(), knowledge :'', bloomTaxonomyLevel:'',standardCriteriaPerformance :''}])
}

const handleRemoveInput = id => {
    const values = [...inputs]
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputs(values)
}

  const { knowledge, topics, instructionalMaterial, otherMaterialsReferences } = formData;
  console.log("FORM DATA, ", formData);



  useEffect(() => {

    async function fetchUnit() {
        const req = await https
          .get(`/lessons/units/6031023397d2e742707b720e`, {
            headers: { Authorization: `Basic ${localStorage.token}` },
          })
          .then((res) => {
            setUnits(res.data);
            console.log("UNITS : ", res.data);
          })
          .catch(function (err) {
            console.log(err);
          });
        return req;
      }
      fetchUnit();
  }, [])
  return (
    <Container maxWidth="xs">
      <Tabs
        fill={true}
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Knowledge" fill={true}>
          <div className="knowledge-container">
            <h5>Instructional Object</h5>
{console.log("MY INPUTS :::::::::::::::", inputs)}
{inputs.map(input => (<>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select Knowledge
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={input.knowledge}
                  onChange={e => handleChangeInput(input.id,e)}
                  label="Select Knowledge"
                  color="primary"
                >
                <MenuItem value="">None</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Cognitive Domain Level
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={input.bloomTaxonomyLevel}
                  onChange={e => handleChangeInput(input.id,e)}
                  label="Cognitive Domain Level"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Entreprenurship</MenuItem>
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={30}>Mathematics</MenuItem>
                  <MenuItem value={30}>Chemistry</MenuItem>
                  <MenuItem value={30}>Physics</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Standard Criteria Performance
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={input.standardCriteriaPerformance}
                  onChange={e => handleChangeInput(input.id,e)}
                  label="Standard Criteria Performance"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Entreprenurship</MenuItem>
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={30}>Mathematics</MenuItem>
                  <MenuItem value={30}>Chemistry</MenuItem>
                  <MenuItem value={30}>Physics</MenuItem>
                </Select>
              </FormControl>
            </div>

            <button disabled={inputs.length ===1} onClick={() => handleRemoveInput(input.id)} className="check-btn-2">
                Remove
              </button>
            </>))}
{/* END OF KNOWLEDGE */}

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            
                  <button onClick={handleAddFields} className="check-btn-2">
                    <PlusOneRoundedIcon />
                  </button>

              <button className="check-btn-2">
                <PlusOneRoundedIcon />
              </button>

            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Instruction Material
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Audio-visual"
                  onChange={handleChange}
                  label="Instruction Material"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Prints</MenuItem>
                  <MenuItem value={20}>Audio</MenuItem>
                  <MenuItem value={30}>Visuals</MenuItem>
                  <MenuItem value={40}>Audiovisuals</MenuItem>
                  <MenuItem value={50}>Electronic Interactives</MenuItem>
                  <MenuItem value={60}>Measurement tools </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.root}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <h7>Upload</h7>
              </label>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Other Materials and References
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Other Materials and References"
                  onChange={handleChange}
                  label="Other Materials and References"
                  color="primary"
                >
                  <MenuItem value="">
                    <em>Select Topic</em>
                  </MenuItem>
                  <MenuItem value={"First Term"}>First Term</MenuItem>
                  <MenuItem value={"Second Term"}>Second Term</MenuItem>
                  <MenuItem value={"Third Term"}>Third Term</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Skills" fill={true}>
          <div className="knowledge-container">
            <h5>Instructional Object</h5>

            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select Knowledge
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={term}
                  onChange={handleChange}
                  label="Select Knowledge"
                  color="primary"
                >
                  <MenuItem value="">
                    <em>Select Topic</em>
                  </MenuItem>
                  <MenuItem value={"First Term"}>First Term</MenuItem>
                  <MenuItem value={"Second Term"}>Second Term</MenuItem>
                  <MenuItem value={"Third Term"}>Third Term</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label" fill>
                  Cognitive Domain Level
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Understanding"
                  onChange={handleChange}
                  label="Cognitive Domain Level"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Entreprenurship</MenuItem>
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={30}>Mathematics</MenuItem>
                  <MenuItem value={30}>Chemistry</MenuItem>
                  <MenuItem value={30}>Physics</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Standard Criteria Performance
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Standard Criteria Performance"
                  onChange={handleChange}
                  label="Standard Criteria Performance"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Entreprenurship</MenuItem>
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={30}>Mathematics</MenuItem>
                  <MenuItem value={30}>Chemistry</MenuItem>
                  <MenuItem value={30}>Physics</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Instruction Material
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Audio-visual"
                  onChange={handleChange}
                  label="Instruction Material"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Prints</MenuItem>
                  <MenuItem value={20}>Audio</MenuItem>
                  <MenuItem value={30}>Visuals</MenuItem>
                  <MenuItem value={40}>Audiovisuals</MenuItem>
                  <MenuItem value={50}>Electronic Interactives</MenuItem>
                  <MenuItem value={60}>Measurement tools </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.root}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <h7>Upload</h7>
              </label>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Other Materials and References
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Other Materials and References"
                  onChange={handleChange}
                  label="Other Materials and References"
                  color="primary"
                >
                  <MenuItem value="">
                    <em>Select Topic</em>
                  </MenuItem>
                  <MenuItem value={"First Term"}>First Term</MenuItem>
                  <MenuItem value={"Second Term"}>Second Term</MenuItem>
                  <MenuItem value={"Third Term"}>Third Term</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Attitude and Value" fill={true}>
          <div className="knowledge-container">
            <h5>Instructional Object</h5>

            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select Knowledge
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={term}
                  onChange={handleChange}
                  label="Select Knowledge"
                  color="primary"
                >
                  <MenuItem value="">
                    <em>Select Topic</em>
                  </MenuItem>
                  <MenuItem value={"First Term"}>First Term</MenuItem>
                  <MenuItem value={"Second Term"}>Second Term</MenuItem>
                  <MenuItem value={"Third Term"}>Third Term</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Cognitive Domain Level
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Understanding"
                  onChange={handleChange}
                  label="Cognitive Domain Level"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Entreprenurship</MenuItem>
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={30}>Mathematics</MenuItem>
                  <MenuItem value={30}>Chemistry</MenuItem>
                  <MenuItem value={30}>Physics</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Standard Criteria Performance
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Standard Criteria Performance"
                  onChange={handleChange}
                  label="Standard Criteria Performance"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Entreprenurship</MenuItem>
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={30}>Mathematics</MenuItem>
                  <MenuItem value={30}>Chemistry</MenuItem>
                  <MenuItem value={30}>Physics</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Instruction Material
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Audio-visual"
                  onChange={handleChange}
                  label="Instruction Material"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Prints</MenuItem>
                  <MenuItem value={20}>Audio</MenuItem>
                  <MenuItem value={30}>Visuals</MenuItem>
                  <MenuItem value={40}>Audiovisuals</MenuItem>
                  <MenuItem value={50}>Electronic Interactives</MenuItem>
                  <MenuItem value={60}>Measurement tools </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.root}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <h7>Upload</h7>
              </label>
            </div>
            <div className="topic">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Other Materials and References
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="Other Materials and References"
                  onChange={handleChange}
                  label="Other Materials and References"
                  color="primary"
                >
                  <MenuItem value="">
                    <em>Select Topic</em>
                  </MenuItem>
                  <MenuItem value={"First Term"}>First Term</MenuItem>
                  <MenuItem value={"Second Term"}>Second Term</MenuItem>
                  <MenuItem value={"Third Term"}>Third Term</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Tab>
      </Tabs>
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
