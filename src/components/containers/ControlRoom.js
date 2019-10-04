import React, { Component } from 'react';
import './custom.css'
import { connect } from 'react-redux';
import { decline, getData } from './../../store/actions/action';
import { approve } from './../../store/actions/seatAction';
import { getSeats} from './../../store/actions/seatAction';
class ControlRoom extends Component {
  
  componentDidMount = () => {
    this.props.getSeats()
    this.props.getData()
}

  decline = (id) => {
    const confirm = window.confirm('Do you want to delete request');
    if(confirm === true){
      this.props.decline(id);
  } 
} //end of decline

  approve = (id) => {
    const confirm = window.confirm('Do you want to approve request');
    if(confirm === true){
      this.props.approve(id);
} 
} //end of decline


  render() {
    //var btnStyle = "waves-effect teal darken-2 btn-small"
    console.log("+++++",this.props.Seat)
    return (
      <div className="row">
        <div className="col s12">
          <table className="striped r_padding">
            <thead>
              <tr>
                <th className="center">Name</th>
                <th className="center">Address</th>
                <th className="center">Phone</th>
                <th className="center">Gender</th>
                <th className="center">Seat</th>
                <th className="center">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.user.map((user, index)=>{
                return <tr key={index}>
                <td className="center">{user.name}</td>
                <td className="center">{user.address}</td>
                <td className="center">{user.phone}</td>
                <td className="center">{user.gender}</td>
                <td className="center">{user.seat}</td>
                <td className="center">
                
                  <span className="waves-effect teal darken-2 btn-small"
                  disabled={ this.props.Seat.find((Useat)=> {
                    if(Useat._id === user.seat && Useat.status === 'Booked'){
                      return "disabled"
                    }
                 })}
                   onClick={()=>this.approve(user.seat)}>
                    <i className="material-icons left">check</i>Approve
                  </span>
                  <span className="waves-effect red darken-4 btn-small"
                    onClick={()=>this.decline(user._id)}>
                    <i className="material-icons left">delete_forever</i>Decline
                  </span>
                </td>
              </tr>
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
const mapPropsToState = (state) => {
  return {
    user: state.user.users,
    Seat: state.Seat.Seats
  }
}
 const mapDispatchToProps = (dispatch) => {
  return{
     getData: () => dispatch(getData()),
     getSeats: () => dispatch(getSeats()),
     decline: (userId) => dispatch(decline(userId)),
     approve: (seatId) => dispatch(approve(seatId)),
   }
 }
// export default connect(mapPropsToState,{getData, decline})(ControlRoom)
export default connect(mapPropsToState,mapDispatchToProps)(ControlRoom)