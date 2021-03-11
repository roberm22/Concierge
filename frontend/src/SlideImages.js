import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import './slideImage.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://canadiantransfers.com/wp-content/uploads/2020/10/Private-Transfers-Cancun.jpg',
    'https://media1.s-nbcnews.com/i/newscms/2019_19/2847166/190506-stock-better-hotel-ew-937a_894bef33cdd0340ad32680c48a99214c.jpg',
    'https://d19tiqumqauva7.cloudfront.net/var/andorra/storage/images/_aliases/intro_slide/www.andorra.ad/multimedia/galeria/menjar/restaurants/restaurant-hotel-isard/1906x960_restaurant-hotel-isard/27835185-1-cat-ES/1906x960_restaurant-hotel-isard.jpg'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export default class SlideImages extends React.Component {

    render() {

        return (
            <div>
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <span>Transport</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <span>Room Service</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <span>Restaurants</span>
                        </div>
                    </div>
                </Slide>
            </div>

        );
    }
}
