import React from 'react';

export default class Welcome extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {
        return (
            <div>

                <h1>Bienvenido</h1>
                <ul>
                    <li>Aqui iria una breve intro a las condiciones del servicio</li>
                    <li>Aqui informacion sobre lo que ofrece y como se usa el servicio</li>
                </ul>
                <button onClick={this.props.conditionsAccepted}>Entiendo y acepto las condiciones</button>

            </div>
        );
    }

}
