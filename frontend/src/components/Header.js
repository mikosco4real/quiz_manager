import React from 'react'
import {Navbar, Button, Alignment } from '@blueprintjs/core'

const Header = () => {
    return (
        <Navbar className="bp3-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Quizer</Navbar.Heading>
                <Navbar.Divider />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT} >
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>
    )
}

export default Header
