import React from 'react';
import "../ServicesStyles.css"
import NavBar from "../../Views/NavBar";
import {Link} from "react-router-dom";
import SlideImages from "../../Views/SlideImages";

export default class Transports extends React.Component {
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
        let transports = this.props.transports;

        let photos = ['/img/trans1.jpg', '/img/trans2.jpg', '/img/trans3.jpg'];

        return (
            <div>
                <NavBar points={this.state.points + points} isLogged={this.props.login.isLogged}/>
                <div className="mainTransport">

                    <div className="firstView">

                        <SlideImages
                            slideImages = {photos}
                            spanOff = {true}
                        />

                        <div className="titleRest">
                            <h1 className="title">TRANSPORTS</h1>
                        </div>

                        <a className="icon" href="#mainInfo">
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

                    <div className="main-content" id="mainInfo">

                        <article className="firstArticle">
                            <div className="container">
                                <div className="row">
                                    <div className="displayFlex">
                                        <h2 className="articleTitle">{transports[0].name}</h2>
                                        <p>
                                            {transports[0].info}
                                        </p>

                                        <div className="menu">
                                            <button>
                                                <Link to="/services/transport/show_transport/"
                                                      onClick={() => {
                                                          this.props.onChangeTransport(0)
                                                      }}>{transports[0].name}
                                                </Link>
                                            </button>
                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>

                                    </div>
                                    <div className="flexImage">
                                        <SlideImages slideImages={transports[0].photos} />
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="article">
                            <div className="container">
                                <div className="row">

                                    <div className="flexImage">
                                        <SlideImages slideImages={transports[1].photos} />
                                    </div>

                                    <div className="displayFlex">
                                        <h2 className="articleTitle">Shuttle</h2>
                                        <p>
                                            {transports[1].info}
                                        </p>

                                        <div className="menu">
                                            <button>
                                                <Link to="/services/transport/show_transport/"
                                                      onClick={() => {
                                                          this.props.onChangeTransport(1)
                                                      }}>{transports[1].name}
                                                </Link>
                                            </button>
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
                                        <h2 className="articleTitle">{transports[2].name}</h2>
                                        <p>
                                            {transports[2].info}
                                        </p>

                                        <div className="menu">
                                            <button>
                                                <Link to="/services/transport/show_transport/"
                                                      onClick={() => {
                                                          this.props.onChangeTransport(2)
                                                      }}>{transports[2].name}
                                                </Link>
                                            </button>
                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>

                                    </div>
                                    <div className="flexImage">
                                        <SlideImages slideImages={transports[2].photos} />
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

