import React from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.css';

export default class ProductsGrid extends React.Component {

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="py-3">
                            {this.props.products.length} {this.props.isShow ? 'Shows' : 'Products'}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <input type="text" name=""
                                   placeholder={this.props.isShow ? 'Search shows' : 'Search products'}
                                   className="form-control" id=""/>
                        </div>
                    </div>
                </div>
                <div className={this.props.isShow ? styles.show_grid : styles.p_grid}>

                    {
                        this.props.products.map(product => {

                            let isInCart = this.props.cartItems.some(item => item.id === product.id)

                            return <ProductItem
                                key={product.id}
                                isShow={this.props.isShow}
                                product={product}
                                isInCart={isInCart}
                                increase={this.props.increase}
                                addProduct={this.props.addProduct}
                            />
                        })
                    }

                </div>
            </div>
        );
    }
}