import axios from "axios";
import { Component } from "react";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";

class ProductList extends Component {

    state = {
        products: [],
        hasError: false
    }

    constructor() {
        super();
        axios.get('https://cgc-node-b1.onrender.com/api/v1/products')
            .then(res => this.setState({ products: res.data.data }))
            .catch(err => this.setState({ hasError: true }));
    }

    // fetch
    render() {
        return <div>
            <h1 className="text-xl font-semibold text-gray-500 m-2">Products</h1>
            <ShouldRender when={this.state.hasError}>
                <Error />
            </ShouldRender>
            <div className="grid md:grid-cols-3 sm:grid-cols-2">
                {this.state.products.map(product => <ProductItem product={product} />)}
            </div>
        </div>;
    }
}

export default ProductList;