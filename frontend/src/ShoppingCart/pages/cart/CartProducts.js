import React from 'react';

import CartItem from './CartItem';

export default class CartProducts extends React.Component {

    render() {

        return (
            <div>
                <div className="card card-body border-0">

                    {
                        this.props.cartItems.map(product =>
                            <CartItem
                                key={product.id}
                                product={product}
                                increase={this.props.increase}
                                decrease={this.props.decrease}
                                removeProduct={this.props.removeProduct}
                            />)
                    }

                </div>
            </div>

        );
    }
}
