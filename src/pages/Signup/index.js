import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

//create state function and define useState for username and password
function Signup() {
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
  };

  const handleUsernameChange =(e) => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };
// const Signup = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//   };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input 
                className="form-control" 
                type="text" 
                placeholder="Username" 
                name="username" 
                value={username}
                onChange={handleUsernameChange}
                // onChange={(e)=> setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                // onChange={(e)=> setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {username}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
  };

export default Signup;
