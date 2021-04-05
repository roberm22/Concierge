import React from "react";
import "../ServicesStyles.css";
import NavBar from "../../Views/NavBar";
import SlideImages from "../../Views/SlideImages";
import {Link} from "react-router-dom";


export default class Shows extends React.Component {
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
        let photos = ["/img/show1.jpg", "/img/show2.jpg", "/img/show3.jpg"];

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
                            <h1 className="title">Shows</h1>
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
                                        <h2 className="articleTitle">{this.props.shows[0].name}</h2>
                                        <p>
                                            {this.props.shows[0].info}
                                            <br/><br/> {this.props.shows[0].info2}
                                        </p>

                                        <div className="menu">

                                            <Link to="/shows/tickets">
                                                <button onClick={() =>
                                                    this.props.onSelectProducts('theatre')
                                                }>
                                                    Buy tickets
                                                </button>
                                            </Link>

                                        </div>
                                        <p>&nbsp;</p>
                                    </div>

                                    <div className="flexImage">
                                        <SlideImages slideImages={this.props.shows[0].photos}/>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="article">
                            <div className="container">
                                <div className="row">
                                    <div className="flexImage">
                                        <SlideImages slideImages={this.props.shows[1].photos}/>
                                    </div>

                                    <div className="displayFlex">
                                        <h2 className="articleTitle">{this.props.shows[1].name}</h2>
                                        <p>
                                            {this.props.shows[1].info}
                                        </p>

                                        <div className="menu">
                                            <Link to="/shows/tickets">
                                                <button onClick={() =>
                                                    this.props.onSelectProducts('concert')
                                                }>
                                                    Buy tickets
                                                </button>
                                            </Link>
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
                                        <h2 className="articleTitle"> {this.props.shows[2].name} </h2>
                                        <p>
                                            {this.props.shows[2].info}
                                        </p>

                                        <div className="menu">

                                            <Link to="/shows/tickets">
                                                <button onClick={() =>
                                                    this.props.onSelectProducts('circus')
                                                }>
                                                    Buy tickets
                                                </button>
                                            </Link>

                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>
                                    </div>

                                    <div className="flexImage">
                                        <SlideImages slideImages={this.props.shows[2].photos}/>
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
