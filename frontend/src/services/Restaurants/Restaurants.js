import React from 'react';
import "./Restaurants.css"
import "../ServicesStyles.css"
import NavBar from "../../Views/NavBar";
import SlideImages from "../../Views/SlideImages";
import {Link} from "react-router-dom";

// Cuidado al añadir algo que se descuadra - Atencion!


export default class Restaurants extends React.Component {
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
        let restaurants = this.props.restaurants;
        const listItems = restaurants.map((restaurant, i) =>
            <div>
                <li className="liR">
                    <Link to="/services/restaurants/show_restaurant/"
                          onClick={() => {
                              this.props.onChangeRestaurant(i)
                          }}>{restaurant.name}
                    </Link>
                </li>
            </div>);

        let photos = [
            '/img/rest1.jpg',
            '/img/rest2.jpg',
            '/img/rest3.jpg'
        ];

        let photos2 = [
            'https://www.viroth-hotel.com/wp-content/uploads/2020/02/Viroths_Salads_31-1-600x400.jpg',
            'https://www.viroth-hotel.com/wp-content/uploads/2020/02/Viroths_Desserts_25-1-600x400.jpg',
            'https://www.viroth-hotel.com/wp-content/uploads/2020/02/Viroths_Desserts_44-1-600x400.jpg'
        ];

        let photos3 = [
            'https://www.viroth-hotel.com/wp-content/uploads/2019/05/Bar-720x480-600x400.jpg',
            'https://www.viroth-hotel.com/wp-content/uploads/2019/06/30.-Bar-1-600x400.jpg',
            'https://www.viroth-hotel.com/wp-content/uploads/2019/06/MG_1040-Edit-600x400.jpg'
        ];

        return (
            <div>
                <NavBar points={this.state.points + points} isLogged={this.props.login.isLogged}/>
                <div className="mainRestaurant">

                    <div className="firstView">

                        <SlideImages
                            slideImages={photos}
                            spanOff={true}
                        />

                        <div className="titleRest">
                            <h1 className="title">RESTAURANT</h1>
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
                                        <h2 className="articleTitle">RESTAURANT</h2>
                                        <p>
                                            The restaurant consists of a spacious poolside dining area with bar as well
                                            as an elegant
                                            glass enclosed space for your dining comfort and pleasure. We also provide
                                            dining services in our guest rooms. At any of these locations you may enjoy
                                            refreshments and light dishes as well as full course meals that represent
                                            both
                                            gastronomic worlds: choose from international dishes, or a seasonally
                                            inspired
                                            Khmer menu.
                                        </p>
                                        <p>
                                            <strong>OPENING HOURS</strong><br/>
                                            07:00 – 10:30 A La Carte Breakfast<br/>
                                            11:00 – 22:00 Lunch Dinner<br/>
                                        </p>

                                        <div className="menu">

                                            <Link to="/shopping/">
                                                <button>Menu</button>
                                            </Link>

                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>

                                    </div>

                                    <div className="flexImage">
                                        <SlideImages
                                            slideImages={photos2}
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="article">
                            <div className="container">
                                <div className="row">

                                    <div className="flexImage">
                                        <SlideImages
                                            slideImages={photos3}
                                        />
                                    </div>

                                    <div className="displayFlex">
                                        <h2 className="articleTitle">BAR</h2>
                                        <p>
                                            The bar consists of a spacious poolside bar area as an elegant
                                            glass enclosed space for your comfort and pleasure. We also provide
                                            bar services in our guest rooms. At any of these locations you may enjoy
                                            refreshments and light drinks as well as awesome cocktails.
                                        </p>
                                        <p>
                                            <strong>OPENING HOURS</strong><br/>
                                            07:00 – 10:30 Indoor Bar<br/>
                                            11:00 – 22:00 Tropical Bar<br/>
                                        </p>

                                        <div className="menu">

                                                <Link to="/shopping/">
                                                    <button>Bar Menu </button>
                                                </Link>

                                            <br/><br/>
                                        </div>
                                        <p>&nbsp;</p>

                                    </div>

                                </div>
                            </div>
                        </article>

                        {/*Depurar botones y funciones*/}
                        <article className="thirdArticle">
                            <div className="container">
                                <div className="row">
                                    <div className="displayList">
                                        <h2 className="articleTitle">OTHERS RESTAURANTS</h2>
                                        <ul className="ul_r">
                                            <button>
                                                {listItems}
                                            </button>

                                        </ul>
                                        <p>&nbsp;</p>

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

