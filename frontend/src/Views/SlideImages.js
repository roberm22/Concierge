import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image';
import {NavLink} from "react-router-dom";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true
}

export default class SlideImages extends React.Component {

    render() {
        let slideImages = this.props.slideImages
        return (
            <div>
                <Slide {...properties} className="slide-images">
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <NavLink to={"/services/"+this.props.span1+"/"} style={{display: this.props.spanOff ? 'none' : 'block'}}>
                                <span>{this.props.span1}</span>
                            </NavLink>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <NavLink to={"/services/"+this.props.route2+"/"} style={{display: this.props.spanOff ? 'none' : 'block'}}>
                                <span>{this.props.span2}</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <NavLink to={"/services/"+this.props.span3+"/"} style={{display: this.props.spanOff ? 'none' : 'block'}}>
                                <span>{this.props.span3}</span>
                            </NavLink>
                        </div>
                    </div>
                </Slide>
            </div>

        );
    }
}
