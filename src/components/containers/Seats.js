import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { getSeats } from './../../store/actions/seatAction';
import SeatImage from './../../assets/redChair.jpg';
import Pending from './../../assets/pending.jpg';
import Booked from './../../assets/booked.jpg';
import { connect } from 'react-redux';

class Seats extends Component {
    handleSeat = (id,status) => {
        if(status === "pending"){
            alert("Already Pending request!");
        }else if(status === "Booked"){
            alert("Seat is Booked")
        }else{
            this.props.history.push(`/form/${id}`);
        }
        
    }
    componentDidMount = () => {
        this.props.getSeats();
        console.log("Component mounted")
    }
    render() {
        console.log("======",this.props.Seat)
        return (
            <div className="container">
                <div className="row" style={{ marginTop: 120 }}>
                        {
                            this.props.Seat.map((seat,index) => <div 
                            className={index%2 === 0 ? 'col s2 offset-s2' : 'col s2'}
                            key={index}>                           
                            <img src={(seat.status === "available") ?
                              SeatImage : (seat.status === "pending") ?
                              Pending :  Booked}
                                alt="seat"
                                style={{width:100,height:100,cursor:'pointer'}}
                                id={seat._id}
                                name={seat.name}
                                onClick={() =>  this.handleSeat(seat._id,seat.status)}
                             />
                        </div>
                        )
                        }
                </div>
            </div>
            
        );
    }
}
const mapStateToProps = (state) => {
    return{
        Seat: state.Seat.Seats
    }
}
const mapDispatchToProps = dispatch => {
   return{
        getSeats: () => dispatch(getSeats())
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Seats)