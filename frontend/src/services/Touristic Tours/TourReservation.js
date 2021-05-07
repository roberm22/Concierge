import React from 'react';
import "./TourReservation.css";
import NavBar from "../../Views/NavBar";
import {Alert, AlertTitle} from "@material-ui/lab";
import {NavLink} from "react-router-dom";


export default class TourReservation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            value: new Date(),
            locale: {name: 'en-US', label: 'English (US)'},
        };

    }

    render() {
        let message, title, link;
        let points = this.props.login.isLogged ? this.props.client.points : undefined;
        switch (this.props.login.status) {
            case "info":
                title = "Log In";
                message = "You need to be logged to make a reservation."
                link = <NavLink to="/login"> Sign In</NavLink>
                break;
            default:
                console.log(this.props.login.status);

        }
        return (

            <div>

                <NavBar points={points} isLogged={this.props.login.isLogged}/>

                <form className="mainReserve">
                    <fieldset>

                        <legend>Make a reservation</legend>

                        <div className="form-group">
                            <label>Name for reservation</label>
                            <input type="text" className="form-control" id="InputDni" aria-describedby="emailHelp"
                                   placeholder="Enter Name" required/>
                        </div>

                        <div className="form-group">
                            <label >Persons</label>
                            <input type="number" className="form-control" id="InputRoom" aria-describedby="roomHelp"
                                   placeholder="Enter number of persons" required/>
                        </div>

                        <div className="form-group">
                            <label >Select the Tour</label>
                            <select className="form-control" id="Select">
                                <option>Select the tour</option>
                                <option>Hapsburgs Madrid & Royal Palace</option>
                                <option> Madrid Retiro Park & Prado Museum</option>
                                <option>Madrid Walking Tour at Night</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label >Date</label>
                            <input type="date" className="form-control" id="InputDate" aria-describedby="dateHelp"
                                   required/>
                        </div>

                        <div className="form-group">
                            <label >Hour</label>
                            <select className="form-control" id="InputHour" aria-describedby="hourHelp"
                                    required>
                                <option>Select the time</option>
                                <optgroup label={"Morning"}>
                                    <option>9:00</option>
                                    <option>9:30</option>
                                    <option>10:00</option>
                                    <option>10:30</option>
                                    <option>11:00</option>
                                    <option>11:30</option>
                                    <option>12:00</option>
                                </optgroup>
                                <optgroup label={"Afternoon"}>
                                    <option>16:00</option>
                                    <option>16:30</option>
                                    <option>17:00</option>
                                    <option>17:30</option>
                                    <option>18:00</option>
                                    <option>18:30</option>
                                    <option>19:00</option>
                                </optgroup>

                            </select>
                        </div>


                        <div className="form-group">
                            <label>Additional information</label>
                            <textarea className="form-control" id="Textarea" rows="3"/>
                        </div>
                        <small>*Please note that tours must be paid directly to the guide on the day of the tour</small>
                        {(!this.props.login.isLogged) ?
                            (<div className="boxT">
                                <Alert severity={this.props.login.status} id="alertT">
                                    <AlertTitle>{title}</AlertTitle>
                                    <div> {message}</div>
                                    <div> {link}</div>
                                </Alert>
                            </div>)
                            :
                            <button
                                type="submit"
                                onClick={() => {
                                    alert("Reservation successful.");
                                }}
                                className="btn btn-primary">
                                Reserve
                            </button>


                        }
                    </fieldset>
                </form>

            </div>
        );
    }
}
