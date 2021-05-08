import React from 'react';
import "./Reservation.css";
import NavBar from "../../Views/NavBar";


export default class Reservation extends React.Component {

    render() {

        let points = this.props.login.isLogged ? this.props.client.points : undefined;

        return (

            <div>

                <NavBar points={points} isLogged={this.props.login.isLogged}/>

                <form className="mainReserve">
                    <fieldset>

                        <legend>Make a reservation</legend>

                        <div className="form-group">
                            <label for="InputDni">Name for reservation</label>
                            <input type="text" className="form-control" id="InputDni" aria-describedby="emailHelp"
                                   placeholder="Enter Name" required />
                        </div>

                        <div className="form-group">
                            <label for="InputRoom">Room</label>
                            <input type="text" className="form-control" id="InputRoom" aria-describedby="roomHelp"
                                   placeholder="Enter room" required />
                        </div>

                        <div className="form-group">
                            <label for="Select">Select the restaurant</label>
                            <select className="form-control" id="Select">
                                <option>Select the restaurant</option>
                                <option>Diurno</option>
                                <option>Sa Brisa</option>
                                <option>Krápula</option>
                                <option>Pink Monkey</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="InputDate">Date</label>
                            <input type="date" className="form-control" id="InputDate" aria-describedby="dateHelp"
                                   required />
                        </div>

                        <div className="form-group">
                            <label for="InputHour">Hour</label>
                            <input type="time" className="form-control" id="InputHour" aria-describedby="hourHelp"
                                   required />
                        </div>

                        <div className="form-group">
                            <label for="Textarea">Additional information</label>
                            <textarea className="form-control" id="Textarea" rows="3"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Reserve</button>
                    </fieldset>
                </form>

            </div>
        );
    }
}
