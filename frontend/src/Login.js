import React from 'react';

export default class login extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página main */

    render() {
        return (
            <div>

                <h3>Contraseña:</h3>
                <input type="text"
                       value={this.props.client.userAnswer || ''}
                       onChange={(event)=>this.props.onPasswordAnswer(event.target.value)}/>

            </div>
        );
    }
}
