import React from 'react';

import {Link} from "react-router-dom";

export default class Siguiente extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página main */

    render() {
        return (
            <div>
                <h1>Datos del Viaje:</h1>
                <h3>Nombre:</h3>
                <input type="text"
                       value= {this.props.siguiente.nombreAnswer || 'Nombre'}
                       onChange={(event)=>this.props.onNombreAnswer(event.target.value)}/>
                <h3>Fecha:</h3>
                <input type="text"
                       value={this.props.siguiente.fechaAnswer || 'XX/XX/XX'}
                       onChange={(event)=>this.props.onFechaAnswer(event.target.value)}/>
                <h3>Comentario:</h3>
                <input type="text"
                       value={this.props.siguiente.comentarioAnswer || 'Deje un comentario extra si lo cree apropiado'}
                       onChange={(event)=>this.props.onComentarioAnswer(event.target.value)}/>

                <p>(falta logica del boton)</p>
                <div>
                <button onClick={this.props.click}> Enviar </button>  <Link to="/services/transport/">Go Back</Link>


                </div>
                {/*<Link to="/profile/">Profile</Link>

                {console.log(this.props.login)}

              */ }
            </div>
        );
    }
}
