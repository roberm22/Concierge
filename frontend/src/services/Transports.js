import React from 'react';
import {Link} from "react-router-dom";

export default class Transports extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {
        let transports = this.props.transports;
        const listItems = transports.map((transport, i) =>
            <div>
                <li>

                    <Link to={"/services/show_transport"}
                          onClick={() => this.props.onChangeTransport(i)}>{transport.name}</Link>
                </li>
            </div>);
        return (
            <div>
                <h1>Transportes Disponibles</h1>
                <ul>{listItems}</ul>
            </div>
        );
    }
}
