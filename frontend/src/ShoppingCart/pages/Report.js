import React from 'react';
import NavBar from "../../NavBar";
import "./Report.css";


export default class Report extends React.Component {

    render() {
        let points = this.props.login.isLogged ? this.props.client.profile.points : undefined;

        return (

            <div>

                <NavBar points={points} isLogged={this.props.login.isLogged}/>
                <form className="mainReport">
                    <fieldset>
                        <legend>Report an incident</legend>

                        <div className="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"
                                   placeholder="Enter email" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>

                        <div className="form-group">
                            <label for="InputDni">DNI</label>
                            <input type="text" className="form-control" id="InputDni" aria-describedby="emailHelp"
                                   placeholder="Enter DNI" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your DNI with anyone
                                else.</small>
                        </div>

                        <div className="form-group">
                            <label for="InputRoom">Room</label>
                            <input type="text" className="form-control" id="InputRoom" aria-describedby="emailHelp"
                                   placeholder="Enter room" required />
                        </div>

                        <div className="form-group">
                            <label for="Select">In which service has the incident occurred?</label>
                            <select className="form-control" id="Select">
                                <option>Select the service</option>
                                <option>Transports</option>
                                <option>Restaurants</option>
                                <option>Rooms Services</option>
                                <option>Other service</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="Textarea">Describe the incident</label>
                            <textarea className="form-control" id="Textarea" rows="3"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>

            </div>
        );
    }
}
