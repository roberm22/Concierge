import React from 'react';
import "./home.css"
import NavBar from "./NavBar";
import SlideImages from "./SlideImages";

export default class Home extends React.Component {

    render() {

        return (
            <div className="home">
                <NavBar/>
                <SlideImages/>
            </div>

        );
    }
}
