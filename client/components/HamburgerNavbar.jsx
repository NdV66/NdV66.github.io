import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, NavLink, Container } from 'reactstrap';
import {IconElement} from './IconElement.jsx';

const NavbarItem = (props) => {
    const className = window.location.href.includes(props.link) ? 'nav-link active' : 'nav-link';

    return <NavItem className='ml-1'>
        <NavLink id={props.id} className={`pl-3 ${className}`} href={props.link}>
            <IconElement icon={props.icon} />{props.text}
        </NavLink>
    </NavItem>;
};

export class HamburgerNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return <Navbar
            color='faded'
            expand='md'
            fixed='top'
            className='custom-toggler pt-1 pb-1'>
            <Container>
                <NavbarBrand href='/'>

                </NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavbarItem link={'#'} text={'Start'} icon={'home'} id={'start'}/>
                            <NavbarItem link={'#'} text={'Blog'} icon={'book'} id={'blog'}/>
                            <NavbarItem link={'#'} text={'O mnie'} icon={'user'} id={'about'}/>
                        </Nav>
                    </Collapse>
            </Container>
        </Navbar>;
    }
}
