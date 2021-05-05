import React from 'react';

import ProductsGrid from './ProductsGrid';
import 'bootswatch/dist/lux/bootstrap.css'
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import NavBar from "../../../Views/NavBar";

export default class Store extends React.Component {
    render() {
        let points = this.props.login.isLogged ? this.props.client.points : undefined;

        return (
            <>
                <NavBar points={points} isLogged={this.props.login.isLogged}/>
                <Header isShow={this.props.isShow}/>
                <main className="container">
                    <div>
                        <div className="text-center mt-5">
                            <h1>{this.props.isShow ? 'Shows' : 'Products'}</h1>
                            <p>{this.props.isShow ? 'Select the shows you want to buy a ticket for' :
                                'Select the items you want to add to the cart'}</p>
                        </div>
                        <ProductsGrid
                            products={this.props.products}
                            isShow={this.props.isShow}
                            cartItems={this.props.cartItems}
                            increase={this.props.increase}
                            addProduct={this.props.addProduct}
                        />
                    </div>
                </main>
                <Footer/>
            </>

        );
    }
}
 
