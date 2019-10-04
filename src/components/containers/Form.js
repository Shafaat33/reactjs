import React, { Component } from 'react';
import './custom.css';
import { connect } from 'react-redux';
import { bookSeat } from './../../store/actions/action';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            seatId: this.props.match.params.id
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleRadioChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //const seat = this.props.match.params.id;
        console.log("after submit",this.state)
        this.props.bookSeat(this.state);
        alert('you will be informed onced your request is approved');
        this.props.history.push('/');
    }

    render() {
        //const seatId = this.props.match.params.id;
        return (
            <div className="row formStyle">
                <form className="col s5 offset-s4 z-depth-1" onSubmit={this.handleSubmit}>
                    {/* {this.props.Seat.map((item, index) => {
                        if(item.id===seatId){
                        return <h4 className="blue-text center" key={index}><b>Book Ticket For {item.name}</b></h4>
                    }
                    else{
                        return null;
                    }})}  */}
                    <h4 className="blue-text center" ><b>Book Your Ticket</b></h4>
                    <div className="input-field">
                        <input type="text" id="name" placeholder="Name" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <input type="text" id="address" placeholder="Address" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <input type="number" id="phone" placeholder="Phone" onChange={this.handleChange} required/>
                    </div>
                    <p className="grey-text"><b>Gender</b></p><p>
                        <label htmlFor="male">
                            <input name="gender" type="radio" value="male"
                             id="male" className="with-gap" 
                             checked={this.state.gender === "male"}
                             onChange={this.handleRadioChange} 
                             />
                            <span>Male</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="gender" type="radio" value="female" 
                            id="Female" className="with-gap" 
                            checked={this.state.gender==="female"} 
                            onChange={this.handleRadioChange}
                            />
                            <span>Female</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="gender" type="radio" value="other"
                             id="other" className="with-gap"   
                             checked={this.state.gender==="other"}
                             onChange={this.handleRadioChange}
                             />
                            <span>Other</span>
                        </label>
                    </p>
                    <button className="btn waves-effect waves-light btnStyle" name="action">Confirm
                    <i className="material-icons right">send</i>
                    </button>
                </form>                
            </div>
        );
    }
}

const mapSateToProps = (state) => {
    return {
        Seat: state.Seat.Seats
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        bookSeat: (userData) => dispatch(bookSeat(userData))
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Form)