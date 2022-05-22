import React,{Component} from 'react';
import {Button,
Modal,
ModalHeader,
ModalBody,
Form,
FormGroup,
Label,
Input,
Container
} from 'reactstrap';

import {connect} from 'react-redux';
import {addItem} from '../actions/itemAction';

class AddItemModal extends Component{
    state = {
        isModal:false,
        name:''
        
    }
    toggler = ()=>{
        this.setState({isModal:!this.state.isModal});
    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const newItem = {
            name:this.state.name
        }
        this.props.addItem(newItem);
        this.toggler();
    }
    render(){
        return(
            <Container>
            <Button color='dark' style={{marginBottom:'2rem'}}
            onClick={this.toggler}>
                Add item
            </Button>
            <Modal
            isOpen = {this.state.isModal}
            toggle = {this.toggler}>
                <ModalHeader toggle={this.toggler}>
                    Add to shopping list
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="item">
                                Item
                            </Label>
                            <Input type ="text"
                             name="name"
                             id="item"
                             placeholder='Add shopping Item'
                             onChange ={this.onChange}
                            />
                             <Button color='dark' style={{marginTop:'2rem'}} block>Add Item</Button>
                        </FormGroup>
                    </Form>
                   
                </ModalBody>

            </Modal>
            </Container>    
        );
    }
} 
const mapStateToProps = (state)=>({
    item:state.item

})
export default connect(mapStateToProps,{addItem})(AddItemModal);