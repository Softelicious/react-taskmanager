import React, {Component} from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo) => (
                    <Todo key={todo.id}  todo={todo} status={this.props.status} delete={this.props.delete}/>
                    ))}
            </div>
        );
    }

}
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;