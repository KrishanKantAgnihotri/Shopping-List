import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    Nav,
    NavItem,
    Container
} from 'reactstrap'



class AppNavbar extends Component{

    state = {
        isOpen:false
    }
    toggler = ()=>{
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    render(){
        return (
            <div>
                <Navbar color="dark" dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>
                            ShoppingList
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggler}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/KrishanKantAgnihotri/Shopping-List">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;