import React from 'react';

import ProductsGrid from './ProductsGrid';
import 'bootswatch/dist/lux/bootstrap.css'
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import NavBar from "../../../NavBar";

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0
        };
    }
    render() {
        let points;
        if (this.props.login.isLogged) {
            points = this.props.client.profile.points;
        } else {
            points = 0;
        }
        return (
            <>
                
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
 
