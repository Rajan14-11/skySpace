import React, { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/useAuth";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../../redux/userSlice";
import Home from "../../Home/Home";
import { auth } from "../../../Firebase/FirebaseInitialize";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const user = useSelector(selectUser);
  const [isRegister, setIsRegister] = useState(false)
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    isRegister? handleLogin():handleRegister();
  };


  useEffect(() => {
   onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        dispatch(login({
          
          email:authUser.email
        }))
      }
      else{
        dispatch(logout())
      }
   })
  }, [])


  const handleLogin = ()=>{
     if(email && password !=""){
            signInWithEmailAndPassword(auth,email,password)
            .then((data)=>{
              console.log(data);
              console.log("logged")
            }).catch((err)=>console.log(err))
     }
  }

  const handleRegister = ()=>{
if(email && password !=""){
            createUserWithEmailAndPassword(auth,email,password)
            .then((data)=>{
              console.log(data);
            })
  }
}


  return (
    <div>
      {user ? (
        <Home />
      ) : (
        <>
          {/*
      {user?.email && <h1>Success</h1>}
{error && <h2>{error}</h2>}
    </div> */}
          {!loading && (
            <Container>
              <Row className="align-items-center">
                <Col md={6}>
                  <h1 className="mb-5">Login to access your account..</h1>
                  <Form onSubmit={handleOnSubmit}>
                    <h3>{isRegister ? "Login" : "Register"}</h3>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required={true}
                        value={email}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        value={password}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      {isRegister ? "Login" : "Register"}
                    </Button>

                    <p>
                      {isRegister ? "New member?" : "Already registered?"}

                      <span onClick={() => setIsRegister((show) => !show)}>
                        {isRegister ? "Register" : "Login"}
                      </span>
                    </p>
                  </Form>
                </Col>
                <Col md={6}>
                  <img
                    className="img-fluid"
                    src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          )}
          {loading && (
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

//   );
// };

export default Login;
