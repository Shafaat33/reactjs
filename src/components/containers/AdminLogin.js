import React, { Component } from 'react';
import './custom.css';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/controlroom');
    }

    render() {
        return (
            <div className="row formStyle">
                <form className="col s5 offset-s4 z-depth-1" onSubmit={this.handleSubmit}>
                   <h4 className="blue-text center">Admin Login</h4>
                    <div className="input-field">
                        <input type="text" id="name" placeholder="Name" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password" onChange={this.handleChange} required/>
                    </div>
                    <button className="btn waves-effect waves-light btnStyle" name="action">Confirm
                    <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default AdminLogin;