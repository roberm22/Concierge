import React from "react";
import NavBar from "../NavBar";
import "./HotelReservation.css";


export default class HotelReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0
        };
    }


    render() {
        let points;
        if (this.props.login.isLogged) {
            points = this.props.client.points;
        } else {
            points = 0;
        }
        return (
            <div>
                <NavBar
                    points={this.state.points + points}
                    isLogged={this.props.login.isLogged}
                />

                <form className="mainReserve">
                    <fieldset>

                        <legend>Extend your reservation</legend>



                        <div className="form-group">
                            <label for="InputDate">New check-out date</label>
                            <input type="date" className="form-control" id="InputDate" aria-describedby="dateHelp"
                                   required/>
                        </div>


                        <div className="form-group">
                            <label for="Textarea">Additional information</label>
                            <textarea className="form-control" id="Textarea" rows="3"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Extend</button>
                    </fieldset>
                </form>

            </div>
        );
    }
}
