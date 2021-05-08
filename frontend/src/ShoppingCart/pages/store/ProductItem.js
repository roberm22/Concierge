import React from 'react';
import { formatNumber } from '../../utils';
import "./ProductItem.css"

export default class ProductItem extends React.Component {

    constructor(props) {
        super(props);
        if(!this.props.isInCart){
            this.state = {
                class: "btn btn-primary btn-sm",
                text: "Add to cart",
                activated: false
            };
        }else{
            this.state = {
                class: "btn btn-outline-primary btn-sm",
                text: "Add more",
                activated: true
            };
        }

    }


    render() {

        return (
            <div className={this.props.isShow ? "divShow card card-body" : "card card-body"}>
                <div id='divImg'>
                    <img className="img-fluid"
                         src={this.props.product.photo} alt=""/>
                </div>
                <div id='divMain'>
                    {this.props.isShow ?
                        <div>
                            <h4>{this.props.product.name}</h4>
                            <p>{this.props.product.description}</p>
                        </div>
                        :
                        <p>{this.props.product.name}</p>
                    }
                    <div className={this.props.isShow ? "flexShow" : undefined}>
                        <div className="text-left"><h3>
                            {this.props.showPoints ?
                                this.props.product.hotelPoints + ' HP' :
                                formatNumber(this.props.product.price)}
                        </h3></div>

                        <div className="text-right buttonsShow">
                            <button
                                onClick={() => {
                                    if(this.props.isInCart || this.state.activated){
                                        this.props.increase(this.props.product);
                                    }else{
                                        this.props.addProduct(this.props.product);
                                        this.setState({
                                            class: "btn btn-outline-primary btn-sm",
                                            text: "Add more",
                                            activated: true
                                        });

                                    }
                                }}
                                className={this.state.class}>
                                {this.state.text}
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}