import React from 'react';
import {Link} from "react-router-dom";
import  "./Transports.css";
import {ArrowBack} from "@material-ui/icons";
import {Alert, AlertTitle} from "@material-ui/lab";

export default class Transports extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {


        let transports = this.props.transports;
        const listItems = transports.map((transport, i) =>
            <div className="o">
                <li>

                    <Link to={"/services/transport/show_transport"}
                          onClick={() => this.props.onChangeTransport(i)}>{transport.name}</Link>
                </li>
            </div>);
        return (
            <div className="main_Trans">





                    <div className="sub">

                <h1 className="header_t" >Available Transports:</h1>
                <ul>{listItems}</ul>

            </div>



            </div>
        );
    }
}
