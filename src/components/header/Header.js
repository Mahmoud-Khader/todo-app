import React, { useContext } from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/loginContext';
import { When } from 'react-if';
export default function Header() {
    const loginContext = useContext(LoginContext)
    return (
        <>
            <When condition={loginContext.loggedIn}>
                <Navbar className="header" style={{ backgroundColor: "#c64756" }}>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading className="title"><h2>To-Do📋</h2></Navbar.Heading>
                        <Navbar.Divider />
                        <Link to='/'>
                            <Button className="bp4-minimal" icon="home" text="Home" />
                        </Link>
                        <Link to='/settingsForm'>
                            <Button className='bp3-minimal' icon='settings' text='Settings' />
                        </Link>
                        <Button onClick={loginContext.logout} className='bp3-minimal' icon={loginContext.loggedin ? 'log-out' : 'log-in'}>
                            {loginContext.loggedin ? 'Logout' : 'Login'}
                        </Button>
                    </Navbar.Group>
                </Navbar>
            </When>
        </>
    );
}