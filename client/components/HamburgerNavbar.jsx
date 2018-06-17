import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, NavLink, Container } from 'reactstrap';
import {IconElement} from './IconElement.jsx';

const NavbarItem = (props) => {
    const className = props.isActive ? 'nav-link active' : 'nav-link';

    return <NavItem className='ml-1'>
        <NavLink id={props.id} className={`pl-3 ${className}`} href={props.link}>
            <IconElement icon={props.icon} />{props.text}
        </NavLink>
    </NavItem>;
};

export class HamburgerNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, active: null };
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
                            <NavbarItem link={'#'} text={'Home'} icon={'home'} id={'home'} isActive={this.state.active}/>
                            <NavbarItem link={'#'} text={'Technologies'} icon={'book'} id={'tech'} isActive={this.state.active}/>
                            <NavbarItem link={'#'} text={'Projects'} icon={'user'} id={'projects'} isActive={this.state.active}/>
                        </Nav>
                    </Collapse>
            </Container>
        </Navbar>;
    }
}
