import React from 'react';
import {NavLink} from "react-router-dom";
import "./Transports.css";
import NavBar from "../../NavBar";

export default class Transports extends React.Component {

    render() {
        let transports = this.props.transports;
        const listItems = transports.map((transport, i) =>
            <div>
                <li className="liT">
                    <NavLink to="/services/transport/show_transport/"
                          onClick={() => this.props.onChangeTransport(i)}>{transport.name}</NavLink>

                </li>
            </div>);

        return (
            <div>
                <NavBar/>

                <div className="main_Trans">
                    <h1 className="header_t">Available Transports:</h1>
                    <ul className="ul_t">
                        <button onClick={window.scrollTo(0, document.body.scrollHeight)}>
                            {listItems}
                        </button>
                    </ul>
                </div>
            </div>
        );


    }
}
