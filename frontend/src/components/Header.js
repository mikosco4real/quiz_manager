import React from 'react'
import {Navbar, Button, Alignment } from '@blueprintjs/core'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar className="bp3-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Quizer</Navbar.Heading>
                <Navbar.Divider />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT} >
                <Link to="/"> <Button className="bp3-minimal" icon="home" text="Home" /> </Link>
                <Link to="/create_quiz"><Button className="bp3-minimal" icon="document" text="Files" /></Link>
            </Navbar.Group>
        </Navbar>
    )
}

export default Header
