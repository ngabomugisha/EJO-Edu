import React,{useState} from "react";
import "./Home.css";
import logo from "../../assets/icons/logo.svg";
import home from "../../assets/img/home.svg";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Login from "../../components/login/Login";
import SignUp from '../../components/signup/SignUp'

function Home() {
    const [auth, setAuth] = useState('none')
  return (
    <>
      <div className="container">
        <div className="left_side">
          <img src={logo} className="logo" />
          <div className="content-text">
            <h2>Education is the</h2>
            <h1>Future</h1>

            <p>
              We are providing the best support <br />
              for schools, parents and student
              <br /> to redefine the future
            </p>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#1f75c6",
                padding: "7px 15px",
                fontSize: "15px",
                color: "#fff",
                textTransform: 'capitalize'
              }}
              variant="contained"
            >
              Join Us
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <KeyboardArrowRightIcon />
            </Button>
          </div>
        </div>
        <div className="right_side">
          <div className="btn-auth">
            <h3 onClick = {() => {
                setAuth('signin')
            }}>Sign In 
            </h3>
            <h3 onClick = {() => {
                setAuth('signup')
            }}>Sign Up</h3>
          </div>
          {(auth == 'signin') ? <Login /> : null }
          {(auth == 'signup') ? <SignUp /> : null }
          {(auth == 'none') ? <img src={home} className="home" /> : null }
        </div>
      </div>
    </>
  );
}

export default Home;
