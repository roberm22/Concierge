import React from 'react';
import un_transporte from "../assets/Transport_elements/siguiente";
import Siguiente from "../assets/Transport_elements/siguiente";
import {passwordAnswer, userAnswer, fechaAnswer, nombreAnswer,comentarioAnswer} from "../redux/actions";
import Login from "../Login";
import {Link} from "react-router-dom";

export default class Transport extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {
        let transports = this.props.transports;
        const listItems = transports.map((transport,i) => <div>
            <li>
                <h1>Servicio de {transport.name}</h1>

                <img src={transport.photo.url} width={300} height={180}/>

                <ul>
                    {transport.description}

                </ul>
                <Link to={"/services/transport/siguiente/"} onClick={() =>this.props.onChangeTransport(i)}>Contratar: {transport.name}</Link>

            </li></div> );
        return (
            <div>
                <h1>Transportes disponibles:</h1>
                  <ul>{listItems}</ul>

            </div>
        );
    }
}
