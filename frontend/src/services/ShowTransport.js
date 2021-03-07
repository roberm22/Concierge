import React from 'react';

import {Link} from "react-router-dom";

export default class ShowTransport extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página main */

    render() {
        return (
            <div>
                <h1>{this.props.currentTransport.name}</h1>

                <img src={this.props.currentTransport.photo.url} alt={"Transporte"} width={300} height={180}/>

                {this.props.currentTransport.description}
                <div>
                    <h3>Solo funciona el link y lo de la fecha no se hacerlo mejor</h3>
                </div>

                <div>

                    Persons: <input type={"text"}/>
                </div>
                <div>
                    Day: <input type={"text"}/> Month: <input type={"text"}/> Time: <input type={"text"}/>
                </div>
                <div>
                    <button>Make Reservation</button>
                    <Link to="/services/transport/">Go Back</Link>
                </div>
            </div>
        );
    }
}
