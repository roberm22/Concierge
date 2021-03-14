import React from 'react';
import "./home.css"
import NavBar from "./NavBar";
import SlideImages from "./SlideImages";

export default class Home extends React.Component {

    render() {

        let photos = [
            'https://canadiantransfers.com/wp-content/uploads/2020/10/Private-Transfers-Cancun.jpg',
            'https://media1.s-nbcnews.com/i/newscms/2019_19/2847166/190506-stock-better-hotel-ew-937a_894bef33cdd0340ad32680c48a99214c.jpg',
            'https://d19tiqumqauva7.cloudfront.net/var/andorra/storage/images/_aliases/intro_slide/www.andorra.ad/multimedia/galeria/menjar/restaurants/restaurant-hotel-isard/1906x960_restaurant-hotel-isard/27835185-1-cat-ES/1906x960_restaurant-hotel-isard.jpg'
        ];
        return (
            <div>
                <NavBar/>
                <div className="mainHome">
                    <div className="slider">
                        <SlideImages
                            slideImages = {photos}
                            span1 = "Transport"
                            span2 = "Room Service"
                            span3 = "Restaurants"
                        />
                    </div>
                </div>
            </div>

        );
    }
}
