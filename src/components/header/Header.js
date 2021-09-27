import React from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <>
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
                </Navbar.Group>
            </Navbar>
        </>
    );
}