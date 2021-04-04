import React from 'react';

import ProductsGrid from './ProductsGrid';
import 'bootswatch/dist/lux/bootstrap.css'
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import NavBar from "../../../NavBar";

export default class Store extends React.Component {
    render() {
        let points = this.props.login.isLogged ? this.props.client.profile.points : undefined;

        return (
            <>
                <NavBar points={points} isLogged={this.props.login.isLogged}/>
                <Header/>
                <main className="container">
                    <div>
                        <div className="text-center mt-5">
                            <h1>Store</h1>
                            <p>This is the Store Page.</p>
                        </div>
                        <ProductsGrid
                            products={this.props.products}
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
 
