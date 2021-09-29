import { useContext, useState } from "react";
import { Card, Elevation, H2, InputGroup, Button } from '@blueprintjs/core';
import { LoginContext } from "../../context/loginContext";
import { When } from "react-if";


export default function Login() {
  const context = useContext(LoginContext);

  // For the login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //For The signup

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const [singupDisplay, setSingupDisplay] = useState(true);


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    context.login(username, password)
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    context.signup(username, password, firstname, lastname, email, role)
  };

  return (
    <>
      {singupDisplay ?
        <When condition={!context.loggedIn}>
          <Card className="cardLogin" interactive elevation={Elevation.FOUR}>
            <H2>Login</H2>
            <form onSubmit={handleLoginSubmit}>
              <label>
                <span>Username</span>
                <InputGroup onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" name="username" />
              </label>

              <label>
                <span>Password</span>
                <InputGroup onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" name="password" />
              </label>

              <label>
                <Button type="submit">Login</Button>
              </label>

              <label>
                <Button type="button" onClick={() => setSingupDisplay(false)}>Signup</Button>
              </label>
            </form>
          </Card>
        </When>
        :
        <Card className="cardLogin" interactive elevation={Elevation.FOUR}>
          <H2>Signup</H2>
          <form onSubmit={handleSignupSubmit}>
            <label>
              <span>Username</span>
              <InputGroup onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" name="username" />
            </label>
            <br />
            <label>
              <span>Firstname</span>
              <InputGroup onChange={(e) => setFirstname(e.target.value)} placeholder="firstName" type="text" name="firstname" />
            </label>
            <br />
            <label>
              <span>Lastname</span>
              <InputGroup onChange={(e) => setLastname(e.target.value)} placeholder="lastname" type="text" name="lastname" />
            </label>
            <br />
            <label>
              <span>Password</span>
              <InputGroup onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" name="password" />
            </label>
            <br />
            <label>
              <span>Email</span>
              <InputGroup onChange={(e) => setEmail(e.target.value)} placeholder="email" type="text" name="email" />
            </label>
            <br />
            <label>
              <span>Role</span>
              <InputGroup onChange={(e) => setRole(e.target.value)} placeholder="role = [user, editor, admin]" type="text" name="username" />
            </label>
            <br />
            <label>
              <Button type="submit">Signup</Button>
            </label>

            <label>
              <Button type="button" onClick={() => setSingupDisplay(true)}>Signin</Button>
            </label>
          </form>
        </Card>
      }
    </>
  );
}