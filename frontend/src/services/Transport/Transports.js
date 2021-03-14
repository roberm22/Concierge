import React from 'react';
import {Link} from "react-router-dom";
import "./Transports.css";

export default class Transports extends React.Component {

    render() {
        let transports = this.props.transports;
        const listItems = transports.map((transport, i) =>
            <div>
                <li>
                    <Link className={"link_t"}  to={"/services/transport/show_transport"}
                          onClick={() => this.props.onChangeTransport(i)}>{transport.name}</Link>
                </li>
            </div>);


        return (
            <div className="main_Trans">
                <div>
                    <h1 className="header_t">Available Transports:</h1>
                    <ul className="ul_t">{listItems}</ul>
                </div>
            </div>
        );


    }
}
