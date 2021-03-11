import React from 'react';

import {Link} from "react-router-dom";
import Calendar_test from '../Calendar_test';



import "react-datetime/css/react-datetime.css";
export default class ShowTransport extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página main */


    render() {

        return (
            <div>
                <div>
                <h1>{this.props.currentTransport.name}</h1>  <img src={this.props.currentTransport.photo.url} alt={"Transporte"} width={300} height={180}/>


                </div>
                {this.props.currentTransport.description}
                <div>
                    <h3>Adapte el viaje a su gusto:</h3>
                </div>

                <div>

                    Número de personas: <input type={"text"}/>
                </div>


                <div>
                    Origen: <input type={"text"}/> Destino: <input type={"text"}/>
<div>
                    Fecha salida:  <Calendar_test/> Fecha llegada:  <Calendar_test/>
</div>



                </div>
                <div>
                    <button>Make Reservation</button>
                    <Link to="/services/transport/">Go Back</Link>
                </div>
            </div>
        );
    }
}
