import React from "react";
import "./home.css";
import NavBar from "../NavBar";
import SlideImages from "../SlideImages";
import {Alert, AlertTitle} from "@material-ui/lab";
import {NavLink} from "react-router-dom";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            value: "Please tell us your needs",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("HotelReservation successful.");
        event.preventDefault();
    }

    render() {
        let points, message, title, link;
        if (this.props.login.isLogged) {
            points = this.props.client.profile.points;
        } else {
            points = 0;
        }
        switch (this.props.login.status) {
            case "info":
                title = "Log In";
                message = "You need to be logged.";
                link = <NavLink to="/login"> Sign In</NavLink>;
                break;
            default:
                console.log(this.props.login.status);
        }
        let photos = [
            "https://canadiantransfers.com/wp-content/uploads/2020/10/Private-Transfers-Cancun.jpg",
            "https://media1.s-nbcnews.com/i/newscms/2019_19/2847166/190506-stock-better-hotel-ew-937a_894bef33cdd0340ad32680c48a99214c.jpg",
            "https://d19tiqumqauva7.cloudfront.net/var/andorra/storage/images/_aliases/intro_slide/www.andorra.ad/multimedia/galeria/menjar/restaurants/restaurant-hotel-isard/1906x960_restaurant-hotel-isard/27835185-1-cat-ES/1906x960_restaurant-hotel-isard.jpg",
        ];

        return (
            <div>
                <NavBar
                    points={this.state.points + points}
                    isLogged={this.props.login.isLogged}
                />
                <div className="mainHome">
                    <div className="slider">
                        <SlideImages
                            slideImages={photos}
                            span1="Transports"
                            span2="Room Services"
                            span3="Restaurants"
                        />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <h1>What do you need?</h1>
                            <textarea
                                required
                                placeholder={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>

                        <br/>

                        {!this.props.login.isLogged ? (
                            <div className="alertHome">
                                <Alert severity={this.props.login.status} id="alert-home">
                                    <AlertTitle>{title}</AlertTitle>
                                    <div> {message}</div>
                                    <div> {link}</div>
                                </Alert>
                            </div>
                        ) : (
                            (this.props.client.tierVIP === 3) ? <input type="submit" value="Submit"/> :
                                (
                                    <div className="alertHome">
                                        <Alert variant="filled" severity="error" id="alert-home">
                                            This is a VIP service, more information: {"\t"}
                                            <NavLink to="/prices/">Service levels</NavLink>
                                        </Alert>
                                    </div>)

                        )}
                    </form>
                </div>
            </div>
        );
    }
}
