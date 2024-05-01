import axios from 'axios';
import React from 'react';
import ShouldRender from '../util/ShouldRender';
import ProductItem from './ProductItem';

class ProductDetail extends React.Component {
    state = { product: null };

    componentDidMount() {
        const id = '663067abe163794c9fe1203e';
        axios.get('https://cgc-node-b1.onrender.com/api/v1/products/' + id)
            .then(res => this.setState({ product: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return <ShouldRender when={this.state.product}>
            <ProductItem product={this.state.product} />
        </ShouldRender>;
    }
}

export default ProductDetail;

// https://fakestoreapi.com/
// Todo
// CRUD
// Routing
// Products
// Github repo admin, access