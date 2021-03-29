import React from "react";
import { Link } from "react-router-dom";
import "./ShowRoomServices.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { ListaService } from "./ListaService";

export default class ShowRoomServices extends React.Component {
  render() {
    let num = this.props.currentRoomServices.servicio;
    console.log(num);
    const ser = num.map((numero, i) => {
      let res;
      for (i = 0; i < numero.length; i++) {
        res = <span className="lista">{numero}</span>;
      }
      return res;
    });

    return (
      <div className="show_Rooms">

        <Route
            path="/"
            render={() => <ListaService />}
        />
        <h1 className="cabeza">{this.props.currentRoomServices.name}</h1>

        <img
          className="foto"
          src={this.props.currentRoomServices.photo.url}
          width={300}
          height={180}
          alt="photo"
        />

        <ul>{ser}</ul>

        <div id="segunda_parte">
          <p className="testo_solo" id="txt_solo">
            <strong>{this.props.currentRoomServices.description}</strong>
          </p>
          <div>
            <p className="texto_solo">Nombre del hotel:</p>{" "}
            <input className="redondeado" type={"text"} />
          </div>
          <div>
            <p className="texto_solo">Dirección:</p>{" "}
            <input
              className="redondeado"
              type={"text"}
              placeholder={"Enhorabuena"}
            />{" "}
            <p className="texto_solo"> Teléfono:</p>{" "}
            <input className="redondeado" type={"text"} />{" "}
          </div>
          <div>
            <button className="redondeado" className="reserva">
              {" "}
              <p className="texto_solo"> Reenvio a Inicio:</p>
            </button>{" "}
            <Link
              className="redondeado"
              
              to="/services/room_services/"
            >
                
                Go Back
                
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
