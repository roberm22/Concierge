import React from 'react';
import {Link} from "react-router-dom";
import  "./Transports.css";

export default class Transports extends React.Component {

    render() {


        let transports = this.props.transports;
        const listItems = transports.map((transport, i) =>
            <div className="restaurants">
                <li className={"res_li"}>

                    <Link className={"res_link"} to={"/services/transport/show_transport"}
                          onClick={() => this.props.onChangeTransport(i)}>{transport.name}</Link>
                </li>
            </div>);



        return (
            <div className="main_Trans1">

                    <div className="sub_Rest">

                <h1 className="header_r" >Available Transports:</h1>
                <ul>{listItems}</ul>
            </div>
            </div>
        );






    }
}
