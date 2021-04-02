import React from 'react';
import "./Transports.css"
import NavBar from "../../NavBar";
import {Link} from "react-router-dom";

export default class Transports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
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
        transports.map((transport, i) =>
            <div>
                <li className="liT">
                    <Link to="/services/transport/show_transport/"
                          onClick={() => {
                              this.props.onChangeTransport(i)
                          }}>{transport.name}
                    </Link>
                </li>
            </div>);

        return (
            <div>
                <NavBar points={this.state.points + points} isLogged={this.props.login.isLogged}/>
                <div className="mainTransport">
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
                                        <img alt={"transport image 1"} src={"https://cronicaglobal.elespanol.com/uploads/s1/32/00/75/6/uber-cabify-vtc-aplicaciones.jpeg"}/>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="article">
                            <div className="container">
                                <div className="row">

                                    <div className="flexImage">
                                        <img alt={"transport image 2"} src={"https://luxurytransport.biz/wp-content/uploads/2019/03/luxury-transport-shuttle-van-proffessional-driver-serbia-luxury-limo-mercedes-hotel-transfers.jpg"}/>
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

                        <article className="article">
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
                                        <img alt={"transport image 3"} src={"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F1079d78e-91ec-11ea-9c50-5254352bc924.jpg?crop=2667%2C1500%2C0%2C0&resize=1180" }/>
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

