import React from "react";
import "./RoomServices.css";
import NavBar from "../../NavBar";
import SlideImages from "../../SlideImages";
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
    let points = 0;

    let photos = [
      "https://www.viroth-hotel.com/wp-content/uploads/2019/05/slide1-1-1920x883.jpg",
      "https://www.viroth-hotel.com/wp-content/uploads/2019/05/Room-Slide-2.jpg",
      "https://www.viroth-hotel.com/wp-content/uploads/2019/05/Room-Slide-5.jpg",
    ];

    let photos2 = [
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iq6VFmURgAcU/v0/1200x800.jpg",
      "https://i.insider.com/5b45e2ac45a56e32008b45ec?width=1068&format=jpeg",
      "https://media.hotelkeys.it/hotel_desartistes/ownimage/1600*1065_2015121717494389.jpg",
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
                    <h2 className="articleTitle">Special delivery</h2>
                    <p>
                      A special delivery is an exclusive service in the hotel in which the staff looks for the wanted
                      item of the client. First it is searched if the item is available in the hotel storage
                      The hotel staff fill it with drinks and snacks for the guest to purchase during their stay. It is stocked with a precise
                      inventory of goods, with a price list. The guest is charged for goods consumed when
                      checking out of the hotel.<br/><br/>
                      In this service you can buy all kinds of items as if it were a supermarket. If the item you want
                      is not on the list, you can add it in the space available for it and our staff will
                      take care of delivering it.
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
                    <h2 className="articleTitle">24 hour Cooking Service</h2>
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
                    <h2 className="articleTitle">
                      Elements of comfort
                    </h2>
                    <p>
                      Request for comfort items in the room: pillow, bedding, bath products, etc.<br/>
                      Regardless of the concept that each person may have of comfort, since it depends on the
                      lifestyle of each individual, it is important to standardize the elements that compose
                      it in order to guarantee a minimum standard in a hotel room. <br/>
                      That is why we consider that the study of comfort is essential to offer the
                      maximum pleasure to the client.
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
                    <SlideImages slideImages={photos4} />
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
