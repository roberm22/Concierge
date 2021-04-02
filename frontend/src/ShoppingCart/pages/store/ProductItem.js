import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils';

export default class ProductItem extends React.Component {

    constructor(props) {
        super(props);
        if(!this.props.isInCart){
            this.state = {
                class: "btn btn-primary btn-sm",
                text: "Add to cart"
            };
        }else{
            this.state = {
                class: "btn btn-outline-primary btn-sm",
                text: "Add more"
            };
        }

    }

    render() {

        return (
            <div className="card card-body">
                <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
                     src={this.props.product.photo} alt=""/>
                <p>{this.props.product.name}</p>
                <h3 className="text-left">{formatNumber(this.props.product.price)}</h3>
                <div className="text-right">
                    <Link to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                        <button
                            onClick={() => {
                                if(this.props.isInCart){
                                    this.props.increase(this.props.product);
                                }else{
                                    this.props.addProduct(this.props.product)
                                    this.setState({
                                        class: "btn btn-outline-primary btn-sm",
                                        text: "Add more"
                                    });
                                }
                            }}
                            className={this.state.class}>
                            {this.state.text}
                        </button>

                </div>
            </div>
        );
    }
}