import React from "react";
import "../ServicesStyles.css";
import NavBar from "../../Views/NavBar";
import SlideImages from "../../Views/SlideImages";
import { Link } from "react-router-dom";


// Cuidado al añadir algo que se descuadra - Atencion!

export default class RoomServices extends React.Component {
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
    let photos = ["/img/room1.jpg", "/img/room2.jpg", "/img/room3.jpg"];

    return (
      <div>
        <NavBar
          points={this.state.points + points}
          isLogged={this.props.login.isLogged}
        />
        <div className="mainRestaurant">
          <div className="firstView">
            <SlideImages slideImages={photos} spanOff={true} />

            <div className="titleRest">
              <h1 className="title">ROOM SERVICES</h1>
            </div>

            <a className="icon" href="#mainInfoRoom">
              <svg className="svg-arrow" viewBox="0 0 512 503.97">
                <g className="shapes">
                  <polygon className="shape-1" points="256 159.97 0 0 0 64 256 223.97 512 64 512 0 256 159.97"/>
                  <polygon className="shape-2" points="256 299.97 0 140 0 204 256 363.97 512 204 512 140 256 299.97"/>
                  <polygon className="shape-3" points="256 439.97 0 280 0 344 256 503.97 512 344 512 280 256 439.97"/>
                </g>
              </svg>
            </a>
          </div>

          <div className="main-content" id="mainInfoRoom">
            <article className="firstArticle">
              <div className="container">
                <div className="row">
                  <div className="displayFlex">
                    <h2 className="articleTitle">{this.props.roomServices[0].name}</h2>
                    <p>
                      {this.props.roomServices[0].info} <br/><br/> {this.props.roomServices[0].info2}
                    </p>

                    <div className="menu">

                      <button onClick={ () =>
                            this.props.onSelectProducts('minibar')
                      }>
                        <Link to="/shopping/">
                          Order now
                        </Link>
                      </button>

                      <br /><br />
                    </div>
                    <p>&nbsp;</p>
                  </div>

                  <div className="flexImage">
                    <SlideImages slideImages={this.props.roomServices[0].photos} />
                  </div>
                </div>
              </div>
            </article>

            <article className="article">
              <div className="container">
                <div className="row">
                  <div className="flexImage">
                    <SlideImages slideImages={this.props.roomServices[1].photos} />
                  </div>

                  <div className="displayFlex">
                    <h2 className="articleTitle">{this.props.roomServices[1].name}</h2>
                    <p>
                      {this.props.roomServices[1].info}
                    </p>
                    <p>
                      <strong>AVAILABLE HOURS</strong>
                      <br />
                      06:00 – 12:00 Breakfast
                      <br />
                      12:00 – 18:00 Lunch
                      <br />
                      18:00 – 24:00 Dinner
                    </p>

                    <div className="menu">

                      <button onClick={ () =>
                          this.props.onSelectProducts('menu')
                      }>
                        <Link to="/shopping/">
                          Order now
                        </Link>
                      </button>

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
                    <h2 className="articleTitle"> {this.props.roomServices[2].name} </h2>
                    <p>
                      {this.props.roomServices[2].info}
                    </p>

                    <div className="menu">

                      <button onClick={ () =>
                          this.props.onSelectProducts('comfort')
                      }>
                        <Link to="/shopping/">
                          Order now
                        </Link>
                      </button>

                      <br />
                      <br />
                    </div>
                    <p>&nbsp;</p>
                  </div>

                  <div className="flexImage">
                    <SlideImages slideImages={this.props.roomServices[2].photos} />
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
