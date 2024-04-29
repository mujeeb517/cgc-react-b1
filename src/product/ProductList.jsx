import axios from "axios";
import { Component } from "react";
import Error from "../util/Error";
import Loader from "../util/Loader";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";

// constructor: 1x
// componentDidMount: 1x
// componentWillUpdate: nX
// componentDidUpdate: nX
// componentWillUnmount: 1x

class ProductList extends Component {

    constructor() {
        super();

        this.state = {
            products: [],
            hasError: false,
            page: 1,
            loading: true,
        }
    }

    onPrev = () => {
        this.setState({
            page: this.state.page - 1
        });
    }

    onNext = () => {
        this.setState({
            page: this.state.page + 1
        });
    }

    componentDidMount() {
        const url = `https://cgc-node-b1.onrender.com/api/v1/products/page/${this.state.page}/size/10`;
        axios.get(url)
            .then(res => this.setState({ products: res.data.data }))
            .catch(err => this.setState({ hasError: true }))
            .finally(() => this.setState({ loading: false }));
    }

    componentDidUpdate(a, b) {
        if (b.page != this.state.page) {
            const url = `https://cgc-node-b1.onrender.com/api/v1/products/page/${this.state.page}/size/10`;
            axios.get(url)
                .then(res => this.setState({ products: res.data.data }))
                .catch(err => this.setState({ hasError: true }));
        }
    }

    // fetch
    render() {
        return <div>
            <div className="flex m-2">
                <h1 className="text-xl font-semibold text-gray-500 m-2">Products</h1>
                <div>
                    <button onClick={this.onPrev} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button onClick={this.onNext} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <ShouldRender when={this.state.loading}>
                <Loader />
            </ShouldRender>
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


/*
    << <  > >>

    https://cgc-node-b1.onrender.com/api/v1/products/page/1/limit/10
    https://cgc-node-b1.onrender.com/api/v1/products/page/2/limit/10
    https://cgc-node-b1.onrender.com/api/v1/products/page/3/limit/10
*/