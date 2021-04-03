import React from "react";
import "./RoomServices.css";
import NavBar from "../../NavBar";
import SlideImages from "../../SlideImages";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import update from "react-addons-update";
import { NavLink } from "react-router-dom";

// Cuidado al añadir algo que se descuadra - Atencion!

export default class RoomServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      value: "Please tell us your incidents",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    let multi = 1;
    if (this.props.client.profile.isVip) {
      multi = 15;
    }
    this.setState({ points: this.state.points + 10 });
    let total =
      this.props.client.profile.points + 10 * multi + this.state.points;
    let newClient = update(this.props.client, {
      profile: { points: { $set: total } },
    });
    this.props.update(newClient);

    alert("Reservation successful. \n You earned 10 points.");
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
      "https://www.viroth-hotel.com/wp-content/uploads/2019/05/slide1-1-1920x883.jpg",
      "https://www.viroth-hotel.com/wp-content/uploads/2019/05/Room-Slide-2.jpg",
      "https://www.viroth-hotel.com/wp-content/uploads/2019/05/Room-Slide-5.jpg",
    ];

    let photos2 = [
      "https://mk0coolroomscom2ooja.kinstacdn.com/wp-content/uploads/sites/3/2020/03/Coolrooms-desayunos-atocha-madrid-services.jpg",
      "https://www.unileverfoodsolutions.es/ideas-menu/especial-hoteles/room-service/tipos-de-room-service/jcr:content/parsys/content-aside-footer/tipsandadvice_812654/image.img.jpg/1518543041515.jpg",
      "https://staro.ua/wp-content/uploads/2016/05/room_services.jpg",
    ];

    let photos3 = [
      "https://mk0coolroomscom2ooja.kinstacdn.com/wp-content/uploads/sites/3/2020/03/desayuno-especial-room-services-atocha.jpg",
      "https://aybmasters.com.do/wp-content/uploads/2020/01/room-services-1179x841.jpg",
      "https://mk0coolroomscom2ooja.kinstacdn.com/wp-content/uploads/sites/3/2020/03/Coolrooms-room-services-atocha-desayunos.jpg",
    ];

    let photos4 = [
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/1600/90/media/aulani-resort/images/en/rooms-offers/in-room-options/aulani-rooms-and-offers-room-breakfast02-hero-g.jpg",
      "https://www.sandals.com/blog/content/images/2019/12/Butler-room-service.jpg",
      "https://www.wrestpoint.com.au/wp-content/uploads/2018/04/WP_1325.jpg",
    ];

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
                  <polygon
                    className="shape-1"
                    points="256 159.97 0 0 0 64 256 223.97 512 64 512 0 256 159.97"
                  />
                  <polygon
                    className="shape-2"
                    points="256 299.97 0 140 0 204 256 363.97 512 204 512 140 256 299.97"
                  />
                  <polygon
                    className="shape-3"
                    points="256 439.97 0 280 0 344 256 503.97 512 344 512 280 256 439.97"
                  />
                </g>
              </svg>
            </a>
          </div>

          <div className="main-content" id="mainInfoRoom">
            <article className="firstArticle">
              <div className="container">
                <div className="row">
                  <div className="displayFlex">
                    <h2 className="articleTitle">24 hour room service</h2>
                    <p>
                      Common in 4 and 5-star hotels, it is assisted by a human
                      team, machinery and specific material that takes care of
                      it. It is widely used in holiday areas, and usually has a
                      regional nod in its content, including typical dishes.
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
                      <button
                        onClick={() => {
                          window.open(
                            "https://www.viroth-hotel.com/wp-content/uploads/2019/11/Web-MenuFood-1.pdf"
                          );
                        }}
                      >
                        Order now
                      </button>
                      <button>
                        <Link to="/shopping1"> Shopping Cart </Link>
                      </button>
                      <br />
                      <br />
                    </div>
                    <p>&nbsp;</p>
                  </div>

                  <div className="flexImage">
                    <SlideImages slideImages={photos2} />
                  </div>
                </div>
              </div>
            </article>

            <article className="article">
              <div className="container">
                <div className="row">
                  <div className="flexImage">
                    <SlideImages slideImages={photos3} />
                  </div>

                  <div className="displayFlex">
                    <h2 className="articleTitle">Room Cooking Service</h2>
                    <p>
                      It is a premium service, very current in 5-star vacation
                      hotels. It consists in that the rooms have an area
                      equipped for the preparation and service of dishes. The
                      cook, with the assistance of a waiter, performs the entire
                      process on-site, whether or not the client is present.
                    </p>
                    <p>
                      <strong>AVAILABLE HOURS</strong>
                      <br />
                      07:00 – 10:30 Breakfast
                      <br />
                      11:00 – 22:00 Lunch & Dinner
                      <br />
                    </p>

                    <div className="menu">
                      <button
                        onClick={() => {
                          window.open(
                            "https://www.viroth-hotel.com/wp-content/uploads/2019/11/Web-MenuFood-1.pdf"
                          );
                        }}
                      >
                        Order now
                      </button>
                      <button>
                        <Link to="/shopping2"> Shopping Cart </Link>
                      </button>
                      <br />
                      <br />
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
                    <h2 className="articleTitle">
                      Room Service 12 hours assisted
                    </h2>
                    <p>
                      This service covers the hours of activity of a hotel from
                      breakfast to dinner and for this it has the support of:
                      <br />
                      <br />
                      - Kiosk system , normally at the reception, which has a
                      minimum range of food and beverages for 24 hours.
                      <br />
                      - Vending system , with self-service machines in the
                      self-checkout and self-service plants.
                      <br />
                      - Mini bar, inside the rooms. Area equipped with a mini
                      bar with an assortment of snacks.
                      <br />- External deals, external offers of fast food
                      restaurants at home that accompany and reinforce the Room
                      Service menu.
                    </p>

                    <div className="menu">
                      <button>
                        <Link to="/services/room_services/show_room_services/">
                          Order now
                        </Link>
                      </button>
                      <button>
                        <Link to="/shopping"> Shopping Cart </Link>
                      </button>

                      <br />
                      <br />
                    </div>
                    <p>&nbsp;</p>
                  </div>

                  <div className="flexImage">
                    <SlideImages slideImages={photos4} />
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <h1>Incidents</h1>
                      <div className="queNecesitas">
                        <textarea
                          onClick={() => {
                            this.setState({ value: "" });
                          }}
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </div>
                    </label>

                    <br />

                    {!this.props.login.isLogged ? (
                      <div className="alertHome">
                        <Alert
                          severity={this.props.login.status}
                          id="alert-home"
                        >
                          <AlertTitle>{title}</AlertTitle>
                          <div> {message}</div>
                          <div> {link}</div>
                        </Alert>
                      </div>
                    ) : (
                      <input type="submit" value="Submit" />
                    )}
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
