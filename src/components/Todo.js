import React, {Component} from 'react';

class Todo extends Component {
    getStyle = (e) =>{
        return {
            padding: '9px',
            backgroundColor: "#f4f4f4",
            textDecoration: this.props.todo.isComplete ? "line-through":'none'
        }
    }

    render() {
        const {title, isComplete, id} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input onChange={this.props.status.bind(this, id)} type="checkbox"/>{' '}
                    {this.props.todo.title}
                    <button type="submit" onClick={this.props.delete.bind(this, id)} style={btnSubmit}>x</button>
                </p>
            </div>
        );
    }
}
const btnSubmit = {
    padding: '8px 9px',
    backgroundColor: "red",
    color: '#fff',
    float: 'right',
    cursor: 'pointer',
    border: '2px white'
}
export default Todo;