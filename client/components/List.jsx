import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
    }

    
    render() {
        return( 
            <ul className="center vertical" id="list">
                    {this.props.todos.map( (todo, index) => <ListEntry key={todo} index={index} todo={todo} deleteItem={this.props.deleteItem}/>
                    )}
            </ul>
        );
    }
}

export default List;