import React, {Component} from 'react';

class AddTask extends Component {
    state = {
        title: ''
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.props.submit(this.state.title);
        this.setState({
            title: ''
        })

    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="w-100 d-flex">
                <input value={this.state.title} type="text" name = 'title' placeholder={"užduotis..."} className="flex-fill text-center" onChange={this.onChange}/>
                <input type="submit" className="w-25" value="įrašyti" />
            </form>
        );
    }
}


export default AddTask;