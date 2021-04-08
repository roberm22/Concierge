import React from "react";
import "../ServicesStyles.css";
import NavBar from "../../Views/NavBar";
import SlideImages from "../../Views/SlideImages";
import {Link} from "react-router-dom";


export default class Tours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0
        };
    }


    render() {
        let points;
        if (this.props.login.isLogged) {
            points = this.props.client.profile.points;
        } else {
            points = 0;
        }
        let photos = ["/img/tour1.jpg", "/img/tour2.jpg", "/img/tour3.jpg"];

        return (
            <div>
                <NavBar
                    points={this.state.points + points}
                    isLogged={this.props.login.isLogged}
                />
                <div className="mainRestaurant">
                    <div className="firstView">
                        <SlideImages slideImages={photos} spanOff={true}/>

                        <div className="titleRest">
                            <h1 className="title">Guided Tours</h1>
                        </div>

                        <a className="icon" href="#mainInfoRoom">
                            <svg className="svg-arrow" viewBox="0 0 512 503.97">
                                <g className="shapes">
                                    <polygon className="shape-1"
                                             points="256 159.97 0 0 0 64 256 223.97 512 64 512 0 256 159.97"/>
                                    <polygon className="shape-2"
                                             points="256 299.97 0 140 0 204 256 363.97 512 204 512 140 256 299.97"/>
                                    <polygon className="shape-3"
                                             points="256 439.97 0 280 0 344 256 503.97 512 344 512 280 256 439.97"/>
                                </g>
                            </svg>
                        </a>
                    </div>

                    <div className="main-content" id="mainInfoRoom">
                        <article className="firstArticle">
                            <div className="container">
                                <div className="row">
                                    <div className="displayFlex">
                                        <h2 className="articleTitle">{this.props.tours[0].name}</h2>
                                        <p>
                                            {this.props.tours[0].info}
                                        </p>
                                        <p>
                                            <strong>START TIMES</strong>
                                            <br/>
                                            From 09:00 to 12:00 every 30 minutes
                                            <br/>
                                            From 16:00 to 19:00 every 30 minutes
                                        </p>
                                        <p>
                                            <strong>PRICES & INFORMATION</strong>
                                            <br/>
                                            € 50 per person (Skip-the-line entry to the Royal Palace included)
                                            <br/>
                                            Duration: 3 hours

                                        </p>

                                        <div className="menu">

                                            <Link to="/services/tours/tourReservation/">
                                                <button>
                                                    Reserve
                                                </button>
                                            </Link>

                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>
                                    </div>

                                    <div className="flexImage">
                                        <SlideImages slideImages={this.props.tours[0].photos}/>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="article">
                            <div className="container">
                                <div className="row">
                                    <div className="flexImage">
                                        <SlideImages slideImages={this.props.tours[1].photos}/>
                                    </div>

                                    <div className="displayFlex">
                                        <h2 className="articleTitle">{this.props.tours[1].name}</h2>
                                        <p>
                                            {this.props.tours[1].info}
                                        </p>
                                        <p>
                                            <strong>START TIMES</strong>
                                            <br/>
                                            From 09:00 to 12:00 every 30 minutes
                                            <br/>
                                            From 16:00 to 19:00 every 30 minutes
                                        </p>
                                        <p>
                                            <strong>PRICES & INFORMATION</strong>
                                            <br/>
                                            € 50 per person (Fast-track entry to Prado museum included)
                                            <br/>
                                            Duration: 1 hour and 30 minutes

                                        </p>

                                        <div className="menu">
                                            <Link to="/services/tours/tourReservation/">
                                                <button>
                                                    Reserve
                                                </button>
                                            </Link>

                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="firstArticle">
                            <div className="container">
                                <div className="row">
                                    <div className="displayFlex">
                                        <h2 className="articleTitle"> {this.props.tours[2].name} </h2>
                                        <p>
                                            {this.props.tours[2].info}
                                        </p>
                                        <p>
                                            <strong>START TIMES</strong>
                                            <br/>
                                            From 09:00 to 12:00 every 30 minutes
                                            <br/>
                                            From 16:00 to 19:00 every 30 minutes
                                        </p>
                                        <p>
                                            <strong>PRICES & INFORMATION</strong>
                                            <br/>
                                            € 30 per person
                                            <br/>
                                            Duration: 3 hours

                                        </p>

                                        <div className="menu">


                                            <Link to="/services/tours/tourReservation/">
                                                <button>
                                                    Reserve
                                                </button>
                                            </Link>

                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>
                                    </div>


                                    <div className="flexImage">
                                        <SlideImages slideImages={this.props.tours[2].photos}/>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}
