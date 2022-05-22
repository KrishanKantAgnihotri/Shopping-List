import React,{Component} from 'react';
import {
    CSSTransition,TransitionGroup
} from 'react-transition-group';
import {
    Container,ListGroup,ListGroupItem,Button
} from 'reactstrap';
import {v4 as uuid} from 'uuid';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemAction';
import propTypes from 'prop-types';

class ShoppingList extends Component{
   componentDidMount(){
       this.props.getItems();
   }
   onDeleteClick = (id)=>{
       this.props.deleteItem(id);
   }
       render(){
        const {items} = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {items.map(({_id,name})=>(
                            <CSSTransition keys={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className='remove-btn' color='danger' 
                                    size='sm'
                                    onClick={this.onDeleteClick.bind(this,_id)}
                                    >&times;</Button>
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }

}
ShoppingList.propTypes = {
    getItems:propTypes.func.isRequired,
    item:propTypes.object.isRequired
}
const mapStateToProps = (state)=>({
    item:state.item
});
export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);